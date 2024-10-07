import SectionTitle from '@/components/global/SectionTitle';
import ProductsGrid from '@/components/products/ProductsGrid';
import { fetchUserFavorites } from '@/utils/actions';
import { Product } from '@prisma/client';

type Favorite = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clerkId: string;
  productId: string;
};

type FavoriteItem = {
  product: Product;
} & Favorite;

const FavoritesPage = async () => {
  const favorites = await fetchUserFavorites();
  if (favorites.length === 0)
    return <SectionTitle text='You have no favorites yet' />;

  return (
    <div>
      <SectionTitle text='Favorites' />
      <ProductsGrid
        products={favorites.map((favorite: FavoriteItem) => favorite.product)}
      />
    </div>
  );
};
export default FavoritesPage;
