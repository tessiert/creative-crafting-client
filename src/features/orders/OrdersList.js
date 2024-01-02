import { useSelector } from 'react-redux';
import { Container, Row, Col, ListGroup, ListGroupItem, CardText } from 'reactstrap';
import Order from './Order';
import { selectOrdersByUsername } from './ordersSlice';
import { getUsername } from '../user/userSlice';

const OrdersList = () => {
  const username = useSelector(getUsername);
  const orders = useSelector(selectOrdersByUsername(username));

  if (orders && orders.length > 0) {
    return (
      <Col className='m-3'>
        {orders.map((order) => {
          return (
            <ListGroup key={order._id} className='mt-3 mb-3'>
              <ListGroupItem className='mb-5'>
                <CardText>
                  <Container>
                    <Row>
                      <Order orderData={order.orderData} />
                    </Row>
                  </Container>
                </CardText>
              </ListGroupItem>
            </ListGroup>
          );
        })}
      </Col>
    );
  }
  return (
    <div className='inline-center mb-5'>This account currently has no order history.</div>
  );
};

export default OrdersList;