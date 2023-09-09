import { Col } from 'reactstrap';
import DescriptionFooter from '../../components/DescriptionFooter';

const HatDescription = ({ product }) => {
    return (
        <Col>
            <p>Description:</p>
            <p>This is a Lovely Handmade Hat created from The Highest Quality Materials.</p>
            <p>Each item is Carefully and Lovingly Hand-Crafted in our Home Studio.</p>
            <p>Makes a Thoughtful and Unique Gift!</p>
            <p>This hat is one size fits most, 22.0-23.0" around.</p>
            <DescriptionFooter product={product} />
        </Col>
    );
};

export default HatDescription;