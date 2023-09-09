import { Container, Row } from "reactstrap";
import DetailHeader from "./DetailHeader";
import DetailImage from "./DetailImage";
import HatDescription from "../features/hats/HatDescription";
import KeychainDescription from "../features/keychains/KeychainDescription";
import NecklaceDescription from "../features/necklaces/NecklaceDescription";

const ProductDetail = ({ product }) => {
    const { img, desc, category, price } = product;

    return (
        <>
            <DetailHeader desc={desc} price={price} />
            <Container>
                <Row className="photos">
                    {/* Conditionally render product description based on
                    product category */}
                    <DetailImage img={img} alt={desc} />
                    { (category === 'hats') &&
                        <HatDescription product={product} />
                    }
                    { (category === 'keychains') &&
                        <KeychainDescription product={product} />
                    }
                    { (category === 'necklaces') &&
                        <NecklaceDescription product={product} />
                    }
                </Row>
            </Container>

        </>
    );
};

export default ProductDetail;