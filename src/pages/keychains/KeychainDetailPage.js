// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { selectKeychainById } from '../../features/keychains/KeychainsSlice';
import ProductDetail from '../../features/products/ProductDetail';
import Reviews from '../../components/Reviews';

const pageTitle = 'Handmade Keychains';

const KeychainDetailPage = () => {
    useEffect(() => {
        document.title = pageTitle;
    }, []);

    const { keychainId } = useParams();
    // const keychain = useSelector(selectKeychainById(keychainId));
    const keychain = selectKeychainById(keychainId);

    return (
        <>
            <ProductDetail product={keychain} />
            <Reviews product={keychain} />
        </>
    )
};

export default KeychainDetailPage;