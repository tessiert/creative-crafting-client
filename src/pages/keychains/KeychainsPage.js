import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import PageTitle from '../../components/PageTitle';
import GalleryColumn from '../../components/GalleryColumn';
import { selectAllKeychains } from '../../features/keychains/KeychainsSlice';

const pageTitle = 'Handmade Keychains';
const subTitle = '($15 Each)'

const KeychainsPage = () => {
    const keychainGallery = useSelector(selectAllKeychains);

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
                    <GalleryColumn gallery={keychainGallery} start={0} end={2} />
                    <GalleryColumn gallery={keychainGallery} start={3} end={5} />
                    <GalleryColumn gallery={keychainGallery} start={6} end={8} />
                </Row>
            </Container>
        </>
    );
};

export default KeychainsPage;
