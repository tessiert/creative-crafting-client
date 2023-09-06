import { Link } from 'react-router-dom';

const ImgLink = ({ route, src, altText, caption, imgClasses, captionClasses }) => {
    return (
        <Link to={route}>
            <figure>
                <img className={`figure-img img-fluid img-thumbnail img-rounded ${imgClasses}`} src={src}
                    alt={altText} />
                <figcaption className={`figure-caption capitalize text-center ${captionClasses}`}>
                    {caption}
                </figcaption>
            </figure>
        </Link>
    );
};

export default ImgLink;