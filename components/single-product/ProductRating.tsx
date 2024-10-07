import { cn } from '^/lib/utils';
import { fetchProductRating } from '^/utils/actions';
import { FaStar } from 'react-icons/fa';

const ProductRating = async ({
  productId,
  className,
}: {
  productId: string;
  className?: string;
}) => {
  const { count, rating } = await fetchProductRating(productId);

  const countValue = `(${count}) reviews`;

  return (
    <span
      className={cn('flex gap-1 items-center text-md mt-1 mb-4', className)}
    >
      <FaStar className='w-3 h-3' />
      {rating} {countValue}
    </span>
  );
};
export default ProductRating;
