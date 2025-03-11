import { createClient } from '@supabase/supabase-js';

const bucketName = 'main-bucket';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;
  const { data } = await supabase.storage
    .from(bucketName)
    .upload(newName, image, { cacheControl: '3600' });
  if (!data) throw new Error('Image upload failed');
  return supabase.storage.from(bucketName).getPublicUrl(newName).data.publicUrl;
};

export const deleteImage = async (url: string) => {
  const imageName = url.split('/').pop();
  if (!imageName) throw new Error('Invalid URL');
  return supabase.storage.from(bucketName).remove([imageName]);
};
