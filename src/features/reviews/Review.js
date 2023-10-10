import { formatDate } from '../../utils/formatDate';

const Review = ({ review }) => {
  const { text, author, date } = review;

  return (
    <>
      {text}
      <br />
      <span> -- </span>
      {author}, {formatDate(date)}
    </>
  );
};

export default Review;