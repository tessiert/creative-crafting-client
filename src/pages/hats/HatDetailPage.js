// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { selectHatById } from '../../features/hats/HatsSlice';
import ProductDetail from '../../features/products/ProductDetail';
import Reviews from '../../components/Reviews';

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
            <Reviews product={hat} />
        </>
    )
};

export default HatDetailPage;