import { Link } from 'react-router-dom';

const ImgLink = ({ route, src, altText, caption, margins }) => {
    return (
        <Link to={route}>
            <figure>
                <img className={`figure-img img-fluid img-thumbnail img-rounded ${margins}`} src={src}
                    alt={altText} />
                <figcaption className="figure-caption capitalize text-center">
                    {caption}
                </figcaption>
            </figure>
        </Link>
    );
};

export default ImgLink;