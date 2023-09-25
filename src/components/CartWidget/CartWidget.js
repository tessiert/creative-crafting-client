import classes from './cart-widget.module.scss';

const CartWidget = ({ numItems }) => {

  return (
    <button className={classes.container}>
      <span className={classes.numItems}>{numItems}</span>
      <i id='cartIcon' className={`fa fa-shopping-cart ${classes.shoppingCart}`} aria-hidden='true'></i>
    </button>
  );
}

export default CartWidget;