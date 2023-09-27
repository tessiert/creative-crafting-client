import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import useLocalStorageState from 'use-local-storage-state';

const DescriptionFooter = ({ product }) => {
  const { id, price } = product;
  const [cart, setCart] = useLocalStorageState('cart', {});
  const [modalOpen, setModalOpen] = useState(false);

  const addToCart = (product) => {
    product.quantity = 1;

    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: product,
    }));
    setModalOpen(true);

  }

  const isInCart = (productId) => Object.keys(cart || {}).includes(productId);

  return (
    <>
      <p>Thanks for stopping in. Please
        <Link className="text-link" to='/contact'> contact us </Link>
        with any questions!
      </p>
      <p>Item #: {id}</p>
      <p>Price: ${price}</p>
      <Button
        id='cartBtn'
        className="btn btn-success mt-2 mb-5"
        disabled={isInCart(product.id)}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </Button>
      <Modal isOpen={modalOpen}>
        <ModalHeader toggle={() => setModalOpen(false)} />
        <ModalBody>
          <p className='text-center'>Item successfully added to cart!</p>
        </ModalBody>
      </Modal>
    </>
  );
};

export default DescriptionFooter;