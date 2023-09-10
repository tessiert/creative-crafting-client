import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Col } from "reactstrap";
// import img from '../app/assets/img/keychains/001_1.jpg';

const DetailImages = ({ img, alt }) => {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });
    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

    let extraClasses = 'thumbnail';

    if (img.length === 1) {
        extraClasses = 'mt-5 thumbnail-lg';
    }

    return (
        <>
            <Col sm='7' lg='6' className="mb-4">
                {img.map((image, idx) => {
                    return (
                        <img onClick={() => openLightboxOnSlide(idx + 1)}
                            key={idx} className={`img-thumbnail img-rounded
                            center mb-4 ${extraClasses}`} src={image} alt={alt} />
                    )
                })}
            </Col>
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={img}
                slide={lightboxController.slide}
            />
        </>
    );
};

export default DetailImages;