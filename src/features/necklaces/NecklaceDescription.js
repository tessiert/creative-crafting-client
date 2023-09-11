import { Col } from 'reactstrap';
import DescriptionFooter from '../../components/DescriptionFooter';
import smiley from '../../app/assets/img/smiley.png';

const NecklaceDescription = ({ product }) => {
    return (
        <Col>
            <p>Description:</p>
            <p>Hand-Painted and One-of-a-Kind</p>
            <p>Painting is sealed under a glass-like resin.</p>
            <p>Every mini-painting is created by hand in our home studio, at the beautiful CT shoreline.</p>
            <p>Setting is approximately 1.5" in width, necklace 18".</p>
            <p>Each item will arrive in a satin or velvet pouch on a maker's card - perfect for gift giving.</p>
            <p>** Please note that, due to the nature of the materials used,
                slight imperfections (such as tiny bubbles) may appear in the
                resin. This is natural and adds to the uniqueness of each
                design! We do our best to show these in the pictures. <img className='emoji text-center' src={smiley} alt='Smiley Face Emoji' />**</p>
            <DescriptionFooter product={product} />
        </Col>
    );
};

export default NecklaceDescription;