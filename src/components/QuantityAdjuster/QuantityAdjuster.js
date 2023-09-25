import { useState } from 'react';
import classes from './quantity-adjuster.module.scss';

const maxQty = 5;

const QuantityAdjuster = ({ removeProductCallback, handleUpdateQuantity, productId }) => {
  const [value, setValue] = useState(1);

  const reduce = () => {
    handleUpdateQuantity(productId, 'decrement');

    setValue(prevState => {
      const updatedValue = prevState - 1
      if (updatedValue === 0) {
        removeProductCallback(productId);
      }
      return updatedValue;
    });
  }

  const increase = () => {
    if (value < maxQty) {
      handleUpdateQuantity(productId, 'increment');
      setValue(prevState => prevState + 1);
    }
  }

  const updateQty = (qty) => {
    if (qty === 0) {
      removeProductCallback(productId);
    } else {
      handleUpdateQuantity(productId, 'set', qty);
      setValue(qty);
    }
    return qty;
  }

  return (
    <div className={classes.quantityAdjuster}>
      <input type="button" value="-" className={classes.buttonMinus} onClick={reduce} />
      <input type="number"
        step="1"
        min="0"
        max={5}
        value={value}
        disabled
        onChange={e => updateQty(parseInt(e.target.value))}
        className={classes.quantityField} />
      <input type="button" value="+" className={classes.buttonPlus} onClick={increase} />
    </div>
  );
}

export default QuantityAdjuster;