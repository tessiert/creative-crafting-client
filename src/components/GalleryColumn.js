import { Col } from 'reactstrap';
import ImgLink from './ImgLink';

const GalleryColumn = ({ gallery, start, end }) => {
  return (
    <Col lg='4' className='mb-4 mb-lg-0'>
      {gallery.slice(start, end + 1).map((item) => {
        const { id, img, desc, category, price, imgClasses, captionClasses } = item;
        let headerText = desc;

        if (category === 'crochet-hats') {
          headerText += ` - $${price}`;
        }


        return (
          <ImgLink key={id} route={`${id}`} src={img[0]}
            altText={headerText} caption={headerText}
            imgClasses={imgClasses}
            captionClasses={captionClasses} />
        );
      })}
    </Col>
  );
};

export default GalleryColumn;
