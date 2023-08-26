import { useEffect } from 'react';
import { Card, CardHeader, CardBody, CardText, Container, Row, Col } from 'reactstrap';
import PageTitle from '../components/PageTitle';
import aboutImg from '../app/assets/img/about.jpg';

const pageTitle = 'About Us';

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
                    <Col lg='6' className='mt-4'>
                        <Card>
                            <CardHeader>Lori Sanfratello</CardHeader>
                            <CardBody>
                                <CardText>
                                    <p>Creative Crafting began more than 20 years
                                    ago, when I was a graduate student spending
                                    a winter break working at a High Energy
                                    Particle Physics lab.  I began crocheting
                                    hats to relax in my free time!
                                    When I discovered other people liked them,
                                    I began offering them for sale.  I soon
                                    started designing my own crochet creations,
                                    and a few years later had published numerous
                                    patterns in a variety of magazines
                                    along with two of my own books.
                                    The Albuquerque Journal was awesome and
                                    featured me in an article on local Artisans.</p>
                                    <p>These many years later (in a new state, with
                                    a new career) I still crochet, but have
                                    expanded my crafting repertoire to include wire
                                    wrapping, quilling, painting,  jewelry making,
                                    and a tiny bit of knitting.  Many of these
                                    crafts I now share with my daughter.  It has
                                    given us an amazing opportunity to create
                                    together - I am amazed and inspired by this
                                    little person with so much wisdom, creativity,
                                    and love!</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg='6' className='mt-4 mb-4'>
                        <Card>
                            <img style={{ borderRadius: 8 }} src={aboutImg}
                                alt='Lori and Alex' />
                        </Card>
                        <Card className='mt-4 mb-4'>
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
                <Row className='mb-4'>
                </Row>
            </Container>
        </>
    );
};

export default AboutPage;
