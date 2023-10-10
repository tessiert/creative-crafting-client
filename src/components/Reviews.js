import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';
import ReviewsList from '../features/reviews/ReviewsList';

const Reviews = ({ category }) => {

  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-3 mb-5">
            <CardHeader className='text-center'><h2>{category} Reviews</h2></CardHeader>
            <CardBody>
              <ReviewsList category={category} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;