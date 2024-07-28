import { LuUser2 } from 'react-icons/lu';
import { currentUser, auth } from '@clerk/nextjs/server';

const UserIcon = async () => {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <img
        src={profileImage}
        className='w-6 h-6 rounded-full object-cover'
        alt='User Profile Image'
      />
    );
  }
  return <LuUser2 className='w-6 h-6 bg-primary rounded-full text-white' />;
};
export default UserIcon;
