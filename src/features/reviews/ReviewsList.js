import { useSelector } from 'react-redux';
import { Col, ListGroup, ListGroupItem, CardText } from 'reactstrap';
import Review from './Review';
import ReviewForm from './ReviewForm';
import { selectReviewsByCategory } from './reviewsSlice';

const ReviewsList = ({ category }) => {
  const reviews = useSelector(selectReviewsByCategory(category));

  if (reviews && reviews.length > 0) {
    console.log(reviews);
    return (
      <Col className='m-3'>
        {reviews.map((review) => {
          return (
            <ListGroup key={review._id} className='mt-3 mb-3'>
              <ListGroupItem>
                <CardText>
                  <Review review={review} />
                </CardText>
              </ListGroupItem>
            </ListGroup>
          );
        })}
        <ReviewForm category={category} />
      </Col>
    );
  }
  return (
    <Col md='5' className='m-1'>
      There are no reviews for this product category yet.
    </Col>
  );
};

export default ReviewsList;