import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import useLocalStorageState from 'use-local-storage-state';
import { isAuthenticated } from '../../features/user/userSlice';
import classes from './shopping-cart.module.scss';
import QuantityAdjuster from '../QuantityAdjuster/QuantityAdjuster';
import SubTotal from './Price/SubTotal';
import CurrencyFormatter from './CurrencyFormatter/CurrencyFormatter';
import CartImgLink from './CartImgLink';

const ShoppingCart = () => {
  const [cart, setCart] = useLocalStorageState('cart', {});

  const navigate = useNavigate();

  const auth = useSelector(isAuthenticated);

  const isObjectEmpty = (obj) => {
    return JSON.stringify(obj) === '{}';
  }

  const handleRemoveProduct = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };

      delete updatedCart[productId];
      return updatedCart;
    });
  }

  const handleUpdateQuantity = (productId, operation, qty = null) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };

      if (updatedCart[productId]) {
        if (operation === 'increment') {
          updatedCart[productId] = { ...updatedCart[productId], quantity: updatedCart[productId].quantity + 1 };
        } else if (operation === 'decrement') {
          updatedCart[productId] = { ...updatedCart[productId], quantity: updatedCart[productId].quantity - 1 };
        } else {
          updatedCart[productId] = { ...updatedCart[productId], quantity: qty };
        }
      }
      return updatedCart;
    });
  }

  const getProducts = () => Object.values(cart || {});

  let cartPrice =
    getProducts().reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0);

  const handleSignInRegister = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <section className={classes.cart}>
        <div className={classes.container}>
          {getProducts().map(product => (
            <Container key={product.id}>
              <Row className={classes.product}>
                <Col lg='2'>
                  <CartImgLink key={product.id} route={`/${product.category}/${product.id}`}
                    src={product.img[0]} alt={product.desc} />
                </Col>
                <Col lg='3'>
                  {(product.oneOfAKind) ?
                    <p className='one-of-a-kind'>One of a Kind</p> :
                    <QuantityAdjuster
                      removeProductCallback={() => handleRemoveProduct(product.id)}
                      handleUpdateQuantity={handleUpdateQuantity}
                      productId={product.id}
                      qty={product.quantity}
                    />}
                  <Button
                    className='remove-btn'
                    size='sm'
                    onClick={() => handleRemoveProduct(product.id)}>
                    <i
                      className='fa fa-remove'
                    />
                  </Button>
                </Col>
                <Col style={{ textAlign: 'left' }}>
                  {product.desc}
                  {<CurrencyFormatter amount={product.price} />}
                </Col>
              </Row>
            </Container>
          ))}
        </div>
        {!isObjectEmpty(cart) &&
          <SubTotal total={cartPrice} />
        }
      </section>
      {!isObjectEmpty(cart) && auth &&
        <div className='mt-4 mb-5'>
          <Button
            className='btn-lg center mb-2'
            color='success'
            onClick={() => navigate('/checkout')}
          >
            Checkout
          </Button>
        </div>
      }
      {!isObjectEmpty(cart) && !auth &&
        <>
          <Button
            className='btn-lg mt-4 mb-2 center'
            color='success'
            onClick={() => handleSignInRegister()}>
            Account Sign In/Register
          </Button>
          <a
            className='text-link inline-center mb-5'
            href='/checkout'
          >
            Checkout as Guest
          </a>
        </>
      }
    </>
  );
}

export default ShoppingCart;
