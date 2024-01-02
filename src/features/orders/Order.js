import { Row, Col, List } from 'reactstrap';
import { formatDate } from '../../utils/formatDate';

const Order = ({ orderData }) => {
  const { create_time, purchase_units } = orderData;
  const orderDetails = purchase_units[0]

  return (
    <>
      <Row className='mt-4 mb-2'><Col><u>Order Date</u>:</Col></Row>
      <p className='offset-1'>{formatDate(create_time)}</p>
      <Row className='mb-2'><Col><u>Shipping Address</u>:</Col></Row>
      <p className='offset-1'>{`${orderDetails.shipping.name.full_name},
        ${orderDetails.shipping.address.address_line_1},
        ${orderDetails.shipping.address.admin_area_2},
        ${orderDetails.shipping.address.admin_area_1}
        ${orderDetails.shipping.address.postal_code}`}
      </p>
      <p><u>Order Details:</u></p>
      {orderDetails.items.map((item) => {
        return (
          <Row className='mb-4'>
            <List>
              <li className='offset-1'>
                <Col sm='5' >
                  {item.quantity} @ ${item.unit_amount.value}</Col>
                <Col>{item.name}</Col>
              </li>
            </List>
          </Row>
        );
      })}
    </>
  );
};

export default Order;