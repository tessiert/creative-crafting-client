import CurrencyFormatter from '../CurrencyFormatter/CurrencyFormatter';
import classes from './price.module.scss';

const TotalPrice = ({ shipping, total }) => {
  return (
    <>
      {(total) ?
        <div className={classes.Price}>
          Shipping: {(shipping) ? <CurrencyFormatter amount={shipping} /> : 'Free'}
        </div>
        : null
      }
      <div className={classes.Price}>
        Total: {<CurrencyFormatter amount={total} />}
      </div>
    </>
  );
}

export default TotalPrice;