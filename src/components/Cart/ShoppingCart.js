import { useState } from 'react';
import { Container, Row, Col, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import useLocalStorageState from 'use-local-storage-state';
import classes from './shopping-cart.module.scss';
import QuantityAdjuster from '../QuantityAdjuster/QuantityAdjuster';
import Price from './Price/Price';
import CurrencyFormatter from './CurrencyFormatter/CurrencyFormatter';
import CartImgLink from './CartImgLink';

const FLATRATESHIPPING = 5;
const FREESHIPPINGTHRESH = 35;

const ShoppingCart = () => {
  const [cart, setCart] = useLocalStorageState('cart', {});
  const [paidModalOpen, setPaidModalOpen] = useState(false);
  const [, setErrorModalOpen] = useState(false);
  const [customerEmail, setCustomerEmail] = useState('');
  const [, setError] = useState(null);

  const isObjectEmpty = (obj) => {
    return JSON.stringify(obj) === '{}';
  }

  const handleRemoveProduct = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };

      delete updatedCart[productId];
      console.log('Remove', updatedCart)
      return updatedCart;
    });
    console.log('Remove', cart)
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
      console.log('Handle Before', updatedCart);
      return updatedCart;
    });
    console.log('Handle After', cart);
  }

  const getProducts = () => Object.values(cart || {});

  let cartPrice =
    getProducts().reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0);
  let shippingPrice = (cartPrice === 0 || cartPrice >= FREESHIPPINGTHRESH) ? 0 : FLATRATESHIPPING;
  let totalPrice = cartPrice + shippingPrice;

  const handleApprove = (order) => {
    console.log(order);
    setCustomerEmail(order.payer.email_address);
    setPaidModalOpen(true);
  };

  const createOrder = (data, actions) => {
    const itemList = getProducts();
    const items = [];

    for (const item of itemList) {
      items.push({
        name: item.desc,
        quantity: item.quantity.toString(),
        sku: item.id,
        unit_amount: {
          "currency_code": "USD",
          "value": item.price.toString()
        }
      })
    }

    return actions.order.create({
      purchase_units: [
        {
          "description": 'Payment to Creative Crafting',
          "items": items,
          "amount": {
            "currency_code": "USD",
            "value": totalPrice.toString(),
            "breakdown": {
              "item_total": {
                "currency_code": "USD",
                "value": cartPrice.toString()
              },
              "shipping": {
                "currency_code": "USD",
                "value": FLATRATESHIPPING.toString()
              },
              "shipping_discount": {
                "currency_code": "USD",
                "value": (cartPrice >= FREESHIPPINGTHRESH) ? FLATRATESHIPPING.toString() : 0
              }
            }
          }
        }
      ],
      intent: 'CAPTURE'
    });
  }

  async function onApprove(data, actions) {
    const order = await actions.order.capture();
    handleApprove(order);
  }

  const onError = (err) => {
    setError(
      'PayPal is reporting a transaction error.  If you continue to receive this message, please contact us for assistance.');
    setErrorModalOpen(true);

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
        <Price shipping={shippingPrice} total={totalPrice} />
      </section>
      {!isObjectEmpty(cart) &&
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
                components: "buttons",
                currency: "USD"
              }
            }>
            <PayPalButtons
              style={{ layout: "vertical", disableMaxWidth: true, maxWidth: '750px' }}
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError}
            />
          </PayPalScriptProvider>
        </div>
      }
      <Modal isOpen={paidModalOpen}>
        <ModalHeader toggle={() => {
          setPaidModalOpen(false)
          setCart({})
        }}
        />
        <ModalBody>
          <p className='text-center'>Thank you for your purchase!  A confirmation
            email is being sent to {customerEmail}.
          </p>
        </ModalBody>
      </Modal>
    </>
  );
}

export default ShoppingCart;
