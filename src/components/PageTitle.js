import { Container, Row, Col } from 'reactstrap';

const PageTitle = ({ title }) => {
    return (
        <Container>
            <Row className='text-center'>
                <Col>
                    <h2 className="gallery-header mt-5 mb-4">
                        {title}
                    </h2>
                </Col>
            </Row>
        </Container>
    );
};

export default PageTitle;