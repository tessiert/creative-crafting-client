import { Col } from 'reactstrap';
import DescriptionFooter from '../../components/DescriptionFooter';

const KeychainDescription = ({ product }) => {
    return (
        <Col>
            <p>Description:</p>
            <p>Handmade and sealed under a 1 inch (25mm) glass dome unless an
                alternate size is specified.</p>
            <p>Every keychain is created by hand in our home studio, at the beautiful CT shoreline.</p>
            <p>Each item will arrive on a maker's card - perfect for gift giving.</p>
            <DescriptionFooter product={product} />
        </Col>
    );
};

export default KeychainDescription;