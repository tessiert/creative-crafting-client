import { Container, Row, Col, Card, CardHeader, CardBody, CardText } from 'reactstrap';

const Reviews = (product) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card className="text-center mt-3 mb-5">
                        <CardHeader>Reviews</CardHeader>
                        <CardBody>
                            <CardText>
                                This item does not yet have any reviews.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Reviews;