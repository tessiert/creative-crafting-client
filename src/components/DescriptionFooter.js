import { Link } from 'react-router-dom';

const DescriptionFooter = ({ product }) => {
    const { id, price } = product;
    return (
        <>
            <p>Thanks for stopping in. Please
                <Link to='/contact'> contact us </Link>
                with any questions!
            </p>
            <p>Item #: {id}</p>
            <p>Price: ${price}</p>
            <button class="btn btn-success mb-5">Add to Cart</button>
        </>
    );
};

export default DescriptionFooter;