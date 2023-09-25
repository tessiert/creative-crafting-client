import { Link } from 'react-router-dom';

const CartImgLink = ({ route, src, altText }) => {
  return (
    <Link to={route}>
      <img className='figure-img img-fluid img-thumbnail img-rounded' src={src}
        alt={altText} />
    </Link>
  );
};

export default CartImgLink;