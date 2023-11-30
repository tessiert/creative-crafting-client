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

  const categoryTitle = category.replace('-', ' ').slice(0, category.length - 1);

  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-3 mb-5">
            <CardHeader
              className='text-center capitalize'>
              <h2>
                {categoryTitle} Reviews
              </h2>
            </CardHeader>
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