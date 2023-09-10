import { Container, Row } from "reactstrap";
import DetailHeader from "../../components/DetailHeader";
import DetailImages from "../../components/DetailImages";
import HatDescription from "../hats/HatDescription";
import KeychainDescription from "../keychains/KeychainDescription";
import NecklaceDescription from "../necklaces/NecklaceDescription";

const ProductDetail = ({ product }) => {
    const { img, desc, category, price } = product;

    return (
        <>
            <DetailHeader desc={desc} price={price} />
            <Container>
                <Row>
                    {/* Conditionally render product description based on
                    product category */}
                    <DetailImages img={img} alt={desc} />
                    {(category === 'hats') &&
                        <HatDescription product={product} />
                    }
                    {(category === 'keychains') &&
                        <KeychainDescription product={product} />
                    }
                    {(category === 'necklaces') &&
                        <NecklaceDescription product={product} />
                    }
                </Row>
            </Container>

        </>
    );
};

export default ProductDetail;