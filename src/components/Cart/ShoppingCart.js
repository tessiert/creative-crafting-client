import { Container, Row, Col } from 'reactstrap';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import useLocalStorageState from 'use-local-storage-state';
import classes from './shopping-cart.module.scss';
import QuantityAdjuster from '../QuantityAdjuster/QuantityAdjuster';
import Price from './Price/Price';
import CurrencyFormatter from './CurrencyFormatter/CurrencyFormatter';
import CartImgLink from './CartImgLink';

const flatRateShipping = 5;
const freeShippingThresh = 35;

const ShoppingCart = () => {
  const [cart, setCart] = useLocalStorageState('cart', {});

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
      console.log(updatedCart)
      return updatedCart;
    });
  }

  const getProducts = () => Object.values(cart || {});

  let cartPrice =
    getProducts().reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0);
  let shippingPrice = (cartPrice === 0 || cartPrice >= freeShippingThresh) ? 0 : flatRateShipping;
  let totalPrice = cartPrice + shippingPrice;

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
    console.log(items);

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
                "value": flatRateShipping.toString()
              },
              "shipping_discount": {
                "currency_code": "USD",
                "value": (cartPrice >= freeShippingThresh) ? flatRateShipping.toString() : 0
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
    console.log("order", order);
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
                  <QuantityAdjuster
                    removeProductCallback={() => handleRemoveProduct(product.id)}
                    handleUpdateQuantity={handleUpdateQuantity}
                    productId={product.id}
                    qty={product.quantity}
                  />
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
              components: "buttons",
              currency: "USD"
            }
          }>
          <PayPalButtons
            style={{ layout: "vertical", disableMaxWidth: true, maxWidth: '750px' }}
            createOrder={createOrder}
            onApprove={onApprove}
          />
        </PayPalScriptProvider>
      </div>
    </>
  );
}

export default ShoppingCart;
