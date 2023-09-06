import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import PageTitle from '../../components/PageTitle';
import ImgLink from '../../components/ImgLink';
import { selectNecklaceGallery } from '../../features/necklaces/NecklacesSlice';

const pageTitle = 'Hand-Painted Necklaces';
const subTitle = '($20 Each)'

const NecklacesPage = () => {
    const necklaceGallery = useSelector(selectNecklaceGallery);

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
            <PageTitle title={pageTitle} subTitle={subTitle} />

            {/* Display Gallery */}
            <Container>
                <Row>
                    {necklaceGallery.map((column, idx) => {
                        const { colItems } = column;

                        return (
                            <Col key={idx} lg='4' className='mb-4 mb-lg-0'>
                                {colItems.map((item) => {
                                    const { id, img, desc, imgClasses, captionClasses } = item;

                                    return (
                                        <ImgLink key={id} route={`/${id}`} src={img}
                                            altText={desc} caption={desc}
                                            imgClasses={imgClasses}
                                            captionClasses={captionClasses} />
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

export default NecklacesPage;