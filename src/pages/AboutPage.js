import { useEffect } from 'react';
import { Card, CardHeader, CardBody, CardText, Container, Row, Col } from 'reactstrap';
import PageTitle from '../components/PageTitle';
import aboutImg from '../app/assets/img/about.jpg';

const pageTitle = 'About Us'

const AboutPage = () => {

    useEffect(() => {
        document.title = pageTitle;
    }, []);

    return (
        <>
            <PageTitle title={pageTitle} />
            <Container>
                <Row className='text-center'>
                    <Col>
                        <q>Me and my mom started this
                            project with beads, shells, and our hearts.</q> - Alex
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col lg='4' className='mt-4 mb-4'>
                        <Card>
                            <CardHeader>Lori Sanfratello</CardHeader>
                            <CardBody>
                                <CardText>
                                    Need blurb here.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg='4' className='d-flex align-items-center mb-4'>
                        <Card>
                            <img style={{ borderRadius: 8 }} src={aboutImg}
                                alt='Lori and Alex' />
                        </Card>
                    </Col>
                    <Col lg='4' className='mt-4 mb-4'>
                        <Card>
                            <CardHeader>Alexandra Tessier</CardHeader>
                            <CardBody>
                                <CardText>
                                    I am eight years old.  I like mixing colors.
                                    Sometimes things turn out like I want them to, but then I realize
                                    that what I had before was better. But I work with what I have.
                                    Sometimes my work turns out beautifully, and sometimes it turns
                                    out not how I expected it to.  But even if it doesn’t turn out
                                    like I expected it to, it’s beautiful in its own way.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AboutPage;
