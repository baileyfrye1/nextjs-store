'use client';

import LoadingTable from '^/components/global/LoadingTable';
import { fetchAdminProducts } from '^/utils/actions';

const loading = async () => {
  const items = await fetchAdminProducts();
  return <LoadingTable rows={items.length} />;
};
export default loading;
