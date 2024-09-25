import { Label } from '../ui/label';
import { Input } from '../ui/input';

const ImageInput = () => {
  const name = 'image';

  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        Image
      </Label>
      <Input
        id={name}
        type='file'
        name={name}
        required
        accept='image/*'
        className='cursor-pointer'
      />
    </div>
  );
};
export default ImageInput;