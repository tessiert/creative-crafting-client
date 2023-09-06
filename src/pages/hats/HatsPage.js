import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import PageTitle from '../../components/PageTitle';
import ImgLink from '../../components/ImgLink';
// import { HAT_GALLERY } from '../../app/assets/shared/HAT_GALLERY';
import { selectHatGallery } from '../../features/hats/HatsSlice';

const pageTitle = 'Hand Crochet Hats';

const HatsPage = () => {
    const hatGallery = useSelector(selectHatGallery);

    useEffect(() => {
        document.title = pageTitle;
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, []);

    return (
        <>
            <PageTitle title={pageTitle} />

            {/* Display Gallery */}
            <Container>
                <Row>
                    {hatGallery.map((column, idx) => {
                        const { colItems } = column;

                        return (
                            <Col key={idx} lg='4' className='mb-4 mb-lg-0'>
                                {colItems.map((item) => {
                                    const {id, img, desc, margins} = item;

                                    return (
                                        <ImgLink key={id} route={`/${id}`} src={img}
                                            altText={desc} caption={desc}
                                            margins={margins} />
                                    );
                                })}
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
};

export default HatsPage;