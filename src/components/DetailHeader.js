import { Container, Row, Col } from "reactstrap";

const DetailHeader = ({desc}) => {
    return (
        <Container>
            <Row className='text-center'>
                <Col>
                    <h2 className='gallery-header mt-5 mb-5'>
                        {desc}
                    </h2>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailHeader;