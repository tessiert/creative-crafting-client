import { Container, Row, Col, Button, Tooltip } from 'reactstrap';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import classes from './shopping-cart.module.scss';
import QuantityAdjuster from '../QuantityAdjuster/QuantityAdjuster';
import Price from './Price/Price';
import CurrencyFormatter from './CurrencyFormatter/CurrencyFormatter';
import CartImgLink from './CartImgLink';

const freeShippingThresh = 35;

const ShoppingCart = () => {
  const [cart, setCart] = useLocalStorageState('cart', {});
  const [tooltipOpen, setTooltipOpen] = useState(false);

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
  let shippingPrice = (cartPrice === 0 || cartPrice >= freeShippingThresh) ? 0 : 5;
  let totalPrice = cartPrice + shippingPrice;

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
                  <QuantityAdjuster
                    removeProductCallback={() => handleRemoveProduct(product.id)}
                    productId={product.id}
                    handleUpdateQuantity={handleUpdateQuantity} />
                </Col>
                <Col style={{ textAlign: 'left' }}>
                  {product.desc}
                  {<CurrencyFormatter amount={product.price} />}
                </Col>
              </Row>
            </Container>
          ))}
        </div>
        <Price shipping={shippingPrice} total={totalPrice} />
      </section>
      <div id='checkoutBtn' className='mt-4 mb-5'
        style={{
          width: "300px",
          margin: 'auto'
        }}
      >
        <PayPalScriptProvider
          options={
            {
              "client-id": "test",
              disableFunding: 'venmo',
              components: "buttons",
              currency: "USD"
            }
          }>
          <PayPalButtons
            style={{ layout: "vertical", disableMaxWidth: true, maxWidth: '750px' }} />
        </PayPalScriptProvider>

        {/* <Tooltip
          isOpen={tooltipOpen}
          placement='right'
          target='checkoutBtn'
          toggle={() => { setTooltipOpen(!tooltipOpen) }}>
          Secure payment support coming soon!
        </Tooltip> */}
      </div>
    </>
  );
}

export default ShoppingCart;
