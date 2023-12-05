import { useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import Checkout from '../components/Cart/Checkout';

const pageTitle = 'Checkout';
const subTitle = '**Free Shipping on Orders of $35 or More**'

const CheckoutPage = () => {

  useEffect(() => {
    document.title = pageTitle;
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: "instant",
    // });
  }, []);

  return (
    <>
      <PageTitle title={pageTitle} subTitle={subTitle} />
      <Checkout />
    </>
  );
};

export default CheckoutPage;
