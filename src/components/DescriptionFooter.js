import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import useLocalStorageState from 'use-local-storage-state';

const DescriptionFooter = ({ product }) => {
  const { id, price } = product;
  const [cart, setCart] = useLocalStorageState('cart', {})

  const addToCart = (product) => {
    product.quantity = 1;

    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: product,
    }));
  }

  const isInCart = (productId) => Object.keys(cart || {}).includes(productId);

  return (
    <>
      <p>Thanks for stopping in. Please
        <Link className="text-link" to='/contact'> contact us </Link>
        with any questions!
      </p>
      <p>Item #: {id}</p>
      <p>Price: ${price}</p>
      <Button
        id='cartBtn'
        className="btn btn-success mt-2 mb-5"
        disabled={isInCart(product.id)}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </Button>
    </>
  );
};

export default DescriptionFooter;