import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import useLocalStorageState from 'use-local-storage-state';
import { addOrder } from '../../features/orders/ordersSlice'
import { isAuthenticated, getUsername } from '../../features/user/userSlice';
import classes from './shopping-cart.module.scss';
import TotalPrice from './Price/TotalPrice';
import CurrencyFormatter from './CurrencyFormatter/CurrencyFormatter';

const FLATRATESHIPPING = 5;
const FREESHIPPINGTHRESH = 35;
const MODE = process.env.NODE_ENV;
const clientID = (MODE === 'development')
  ? 'test' : 'AcwjfeuGgxqIrHchDIg08I-8CZBYZzGKB7V57ZQDr8YKtE9SHSA9wT3Y27k2zVjQH1_IOCAmzqQ3IiXt'

const Checkout = () => {
  const [cart, setCart] = useLocalStorageState('cart', {});
  const [paidModalOpen, setPaidModalOpen] = useState(false);
  const [, setErrorModalOpen] = useState(false);
  const [customerEmail, setCustomerEmail] = useState('');
  const [, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector(isAuthenticated);
  const username = useSelector(getUsername);

  const isObjectEmpty = (obj) => {
    return JSON.stringify(obj) === '{}';
  }

  const getProducts = () => Object.values(cart || {});

  let cartPrice =
    getProducts().reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0);
  let shippingPrice = (cartPrice === 0 || cartPrice >= FREESHIPPINGTHRESH) ? 0 : FLATRATESHIPPING;
  let totalPrice = cartPrice + shippingPrice;

  const handleApprove = (order) => {
    console.log(order);
    if (auth) {
      const userOrder = {
        'username': username,
        'order': order
      }
      dispatch(addOrder(userOrder));
    }

    setCustomerEmail(order.payer.email_address);
    setCart({});
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
                  <img className='img-rounded' src={product.img[0]} alt={product.desc} />
                </Col>
                <Col lg='3'>
                  Qty: {product.quantity}
                </Col>
                <Col style={{ textAlign: 'left' }}>
                  {product.desc}
                  {<CurrencyFormatter amount={product.price} />}
                </Col>
              </Row>
            </Container>
          ))}
        </div>
        <TotalPrice shipping={shippingPrice} total={totalPrice} />
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
                "client-id": clientID,
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
      <Modal
        isOpen={paidModalOpen}
        onClosed={() => navigate('/cart')}
      >
        <ModalHeader toggle={() => {
          setPaidModalOpen(false)
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

export default Checkout;
