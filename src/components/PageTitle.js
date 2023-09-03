import { Container, Row, Col } from 'reactstrap';

const PageTitle = ({ title, subTitle }) => {
    return (
        <Container>
            <Row className='text-center'>
                <Col>
                    <h2 className="gallery-header mt-5">
                        {title}
                    </h2>
                    <h3 className="sub-header mb-5">{subTitle}</h3>
                </Col>
            </Row>
        </Container>
    );
};

export default PageTitle;