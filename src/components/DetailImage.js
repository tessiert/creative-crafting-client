import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Col } from "reactstrap";
// import img from '../app/assets/img/keychains/001_1.jpg';

const DetailImage = ({ img, alt }) => {
    const [lightboxToggler, setLightboxToggler] = useState(false);

    return (
        <>
            <Col sm='7' lg='6'>
                <img onClick={() => setLightboxToggler(!lightboxToggler)} 
                    className="img-thumbnail img-rounded
                    thumbnail-lg mt-5 mb-4 center" src={img} alt={alt} />
            </Col>
            <FsLightbox
                toggler={lightboxToggler}
                sources={[
                    img
                ]}
            />
        </>
    );
};

export default DetailImage;