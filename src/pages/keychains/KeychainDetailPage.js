// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { selectKeychainById } from '../../features/keychains/keychainsSlice';
import ProductDetail from '../../features/products/ProductDetail';
import Reviews from '../../components/Reviews';

const pageTitle = 'Handmade Keychains';

const KeychainDetailPage = () => {
  useEffect(() => {
    document.title = pageTitle;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const { keychainId } = useParams();
  // const keychain = useSelector(selectKeychainById(keychainId));
  const keychain = selectKeychainById(keychainId);

  return (
    <>
      <ProductDetail product={keychain} />
      <Reviews category={keychain.category} />
    </>
  )
};

export default KeychainDetailPage;