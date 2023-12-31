import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import HomeCarousel from '../components/Carousel/HomeCarousel';
import ImgLink from '../components/ImgLink';
import { selectFeaturedItems } from '../features/homepage/homepageSlice';

const pageTitle = 'Creative Crafting';

const HomePage = () => {
  const featuredItems = useSelector(selectFeaturedItems);

  useEffect(() => {
    document.title = pageTitle;
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md='8' className='mt-5 mx-auto'>
            <HomeCarousel id='homeCarousel' className="carousel slide carousel-fade" />
          </Col>
        </Row>
        <Row className='mt-5'>
          {featuredItems.map((item, idx) => {
            const { route, img, altText, caption, imgClasses, captionClasses } = item;

            return (
              <Col key={idx} sm='4' className='mb-5'>
                <ImgLink route={route} src={img}
                  altText={altText} caption={caption}
                  imgClasses={imgClasses}
                  captionClasses={captionClasses} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;