// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { selectHatById } from '../../features/hats/hatsSlice';
import ProductDetail from '../../features/products/ProductDetail';
import Reviews from '../../components/Reviews';
// import ReviewsList from '../../features/reviews/ReviewsList';

const pageTitle = 'Hand Crochet Hats';

const HatDetailPage = () => {
  useEffect(() => {
    document.title = pageTitle;
  }, []);

  const { hatId } = useParams();
  // const hat = useSelector(selectHatById(hatId));
  const hat = selectHatById(hatId);

  return (
    <>
      <ProductDetail product={hat} />
      <Reviews category={hat.category} />
    </>
  )
};

export default HatDetailPage;