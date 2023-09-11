// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { selectNecklaceById } from '../../features/necklaces/NecklacesSlice';
import ProductDetail from '../../features/products/ProductDetail';
import Reviews from '../../components/Reviews';

const pageTitle = 'Hand-Painted Necklaces';

const NecklaceDetailPage = () => {
    useEffect(() => {
        document.title = pageTitle;
    }, []);

    const { necklaceId } = useParams();
    // const necklace = useSelector(selectNecklaceById(necklaceId));
    const necklace = selectNecklaceById(necklaceId);

    return (
        <>
            <ProductDetail product={necklace} />
            <Reviews product={necklace} />
        </>
    )
};

export default NecklaceDetailPage;