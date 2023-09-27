import { useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import ShoppingCart from '../components/Cart/ShoppingCart';

const pageTitle = 'Your Cart';
const subTitle = '**Free Shipping on Orders of $35 or More**'

const CartPage = () => {

  useEffect(() => {
    document.title = pageTitle;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <PageTitle title={pageTitle} subTitle={subTitle} />
      <ShoppingCart />
    </>
  );
};

export default CartPage;
