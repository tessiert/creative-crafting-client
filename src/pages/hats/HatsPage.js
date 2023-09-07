import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import PageTitle from '../../components/PageTitle';
import GalleryColumn from '../../components/GalleryColumn';
import { selectAllHats } from '../../features/hats/HatsSlice';

const pageTitle = 'Hand Crochet Hats';

const HatsPage = () => {
    const hatGallery = useSelector(selectAllHats);

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
                    <GalleryColumn gallery={hatGallery} start={0} end={2} />
                    <GalleryColumn gallery={hatGallery} start={3} end={6} />
                    <GalleryColumn gallery={hatGallery} start={7} end={9} />
                </Row>
            </Container>
        </>
    );
};

export default HatsPage;