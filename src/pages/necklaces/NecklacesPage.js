import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import PageTitle from '../../components/PageTitle';
import GalleryColumn from '../../components/GalleryColumn';
import { selectAllNecklaces } from '../../features/necklaces/necklacesSlice';

const pageTitle = 'Hand-Painted Necklaces';
const subTitle = '($20 Each)'

const NecklacesPage = () => {
  const necklaceGallery = useSelector(selectAllNecklaces);

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
          <GalleryColumn gallery={necklaceGallery} start={0} end={2} />
          <GalleryColumn gallery={necklaceGallery} start={3} end={5} />
          <GalleryColumn gallery={necklaceGallery} start={6} end={8} />
        </Row>
      </Container>
    </>
  );
};

export default NecklacesPage;