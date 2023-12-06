// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { selectNecklaceById } from '../../features/necklaces/necklacesSlice';
import ProductDetail from '../../features/products/ProductDetail';
import Reviews from '../../components/Reviews';

const pageTitle = 'Hand-Painted Necklaces';

const NecklaceDetailPage = () => {
  useEffect(() => {
    document.title = pageTitle;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const { necklaceId } = useParams();
  // const necklace = useSelector(selectNecklaceById(necklaceId));
  const necklace = selectNecklaceById(necklaceId);

  return (
    <>
      <ProductDetail product={necklace} />
      <Reviews category={necklace.category} />
    </>
  )
};

export default NecklaceDetailPage;