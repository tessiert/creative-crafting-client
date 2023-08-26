import { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import HomeCarousel from '../components/HomeCarousel';

const pageTitle = 'Creative Crafting';

const HomePage = () => {

    useEffect(() => {
        document.title = pageTitle;
    }, []);

    return (
        <>

            <Container>
                <Row>
                    <Col md='8' className='mt-5 mx-auto'>
                        <HomeCarousel id='homeCarousel' className="carousel slide carousel-fade" />
                        {/* <div id="homeCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={carouselImg1}
                                        alt="Handmade Keychains" />
                                    <div className="carousel-caption">
                                        <h3>Handmade Keychains</h3>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={carouselImg2}
                                        alt="Crochet Hats" />
                                    <div className="carousel-caption">
                                        <h3>Crochet Hats</h3>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={carouselImg3}
                                        alt="Hand-Painted Necklaces" />
                                    <div className="carousel-caption">
                                        <h3>Hand-Painted Necklaces</h3>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={carouselImg4}
                                        alt="Original Designs" />
                                    <div className="carousel-caption">
                                        <h3>Original Designs</h3>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={carouselImg5}
                                        alt="One-of-a-Kind" />
                                    <div className="carousel-caption">
                                        <h3>One-of-a-Kind</h3>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={carouselImg6}
                                        alt="Unique Gifts" />
                                    <div className="carousel-caption">
                                        <h3>Unique Gifts</h3>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={carouselImg7}
                                        alt="Lovingly Crafted" />
                                    <div className="carousel-caption">
                                        <h3>Lovingly Crafted</h3>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#homeCarousel" role="button" data-bs-slide="prev">
                                <i className="carousel-control-prev-icon"></i>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#homeCarousel" role="button:" data-bs-slide="next">
                                <i className="carousel-control-next-icon"></i>
                                <span className="sr-only">Next</span>
                            </a>
                            <button className="btn btn-success btn-sm" id="carouselButton">
                                <i className="fa fa-pause"></i>
                            </button>
                        </div> */}
                    </Col> 
                </Row>
            </Container>
        </>
    );
};

export default HomePage;

{/*}
    <div class="row mt-5">
        <div class="col-sm-4 mb-5">
            <a href="keychains.html">
                <figure>
                    <img class="figure-img img-fluid img-thumbnail img-rounded" src="images/keychains/003_1.jpg"
                        alt="Picture of Keychain">
                        <figcaption class="figure-caption text-center">
                            Keychains
                        </figcaption>
                </figure>
            </a>
        </div>
        <div class="col-sm-4 mb-5">
            <a href="hats.html">
                <figure>
                    <img class="figure-img img-fluid img-thumbnail img-rounded" src=" images/hat.webp"
                        alt="Picture of Crochet Hat">
                        <figcaption class="figure-caption text-center">
                            Crochet Hats
                        </figcaption>
                </figure>
            </a>
        </div>
        <div class="col-sm-4 mb-5">
            <a href="necklaces.html">
                <figure>
                    <img class="figure-img img-fluid img-thumbnail img-rounded" src="images/necklaces/003_1.jpg"
                        alt="Picture of Necklace">
                        <figcaption class="figure-caption text-center">
                            Necklaces
                        </figcaption>
                </figure>
            </a>
        </div>
    </div>
</div> */}
