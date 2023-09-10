import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip, Button } from 'reactstrap';

const DescriptionFooter = ({ product }) => {
    const { id, price } = product;
    const [tooltipOpen, setTooltipOpen] = useState(false);

    return (
        <>
            <p>Thanks for stopping in. Please
                <Link className="text-link" to='/contact'> contact us </Link>
                with any questions!
            </p>
            <p>Item #: {id}</p>
            <p>Price: ${price}</p>
            <Button id='cartBtn' className="btn btn-success mt-2 mb-5">Add to Cart</Button>
            <Tooltip 
                isOpen={tooltipOpen}
                placement='right'
                target='cartBtn'
                toggle={() => { setTooltipOpen(!tooltipOpen) }}>
                Shopping Cart functionality coming soon!
            </Tooltip>
        </>
    );
};

export default DescriptionFooter;