import { useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import ShoppingCart from '../components/Cart/ShoppingCart';

const pageTitle = 'Your Cart';

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
      <PageTitle title={pageTitle} />
      <ShoppingCart />
    </>
  );
};

export default CartPage;
