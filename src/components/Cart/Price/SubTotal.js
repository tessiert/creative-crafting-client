import CurrencyFormatter from '../CurrencyFormatter/CurrencyFormatter';
import classes from './price.module.scss';

const SubTotal = ({ total }) => {
  return (
    <>
      <div className={classes.Price}>
        SubTotal: {<CurrencyFormatter amount={total} />}
      </div>
    </>
  );
}

export default SubTotal;