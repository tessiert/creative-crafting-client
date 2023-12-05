import { useEffect } from 'react';
import PageTitle from '../components/PageTitle';

const pageTitle = 'Order History';

const OrdersPage = () => {

  useEffect(() => {
    document.title = pageTitle;
  }, []);

  return (
    <>
      <PageTitle title={pageTitle} />
      <div className='inline-center mb-5'>This account currently has no order history.</div>
    </>
  );
};

export default OrdersPage;