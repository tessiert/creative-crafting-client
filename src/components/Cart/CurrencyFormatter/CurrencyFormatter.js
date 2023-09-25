import classes from './currency-formatter.module.scss'

const CurrencyFormatter = ({ amount }) => {
  const formattedAmount = amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return <span className={classes.currency}>{formattedAmount}</span>
}

export default CurrencyFormatter;