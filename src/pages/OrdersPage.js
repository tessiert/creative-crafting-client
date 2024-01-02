import { useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import OrdersList from '../features/orders/OrdersList';

const pageTitle = 'Order History';

const OrdersPage = () => {

  useEffect(() => {
    document.title = pageTitle;
  }, []);

  return (
    <>
      <PageTitle title={pageTitle} />
      <OrdersList />
    </>
  );
};

export default OrdersPage;