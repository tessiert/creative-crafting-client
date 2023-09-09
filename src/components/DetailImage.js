import { Col } from "reactstrap";
// import img from '../app/assets/img/keychains/001_1.jpg';

const DetailImage = ({img, alt}) => {
    return (
        <Col sm='7' lg='6' className="d-flex justify-content-center item">
            <a href={img} data-lightbox="photos">
                <img className="img-fluid img-thumbnail img-rounded 
                    thumbnail-lg mt-5 mb-4" src={img} alt={alt} />
            </a>
        </Col>
    );
};

export default DetailImage;