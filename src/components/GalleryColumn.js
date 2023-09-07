import { Col } from 'reactstrap';
import ImgLink from './ImgLink';

const GalleryColumn = ({gallery, start, end}) => {
    return (
        <Col lg='4' className='mb-4 mb-lg-0'>
            {gallery.slice(start, end + 1).map((item) => {
                const { id, img, desc, imgClasses, captionClasses } = item;

                return (
                    <ImgLink key={id} route={`${id}`} src={img}
                        altText={desc} caption={desc}
                        imgClasses={imgClasses}
                        captionClasses={captionClasses} />
                );
            })}
        </Col>
    );
};

export default GalleryColumn;
