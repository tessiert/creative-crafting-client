import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import PageTitle from '../components/PageTitle';

const pageTitle = 'Shipping and Returns';

const ShippingPage = () => {

  useEffect(() => {
    document.title = pageTitle;
  }, []);

  return (
    <>
      <PageTitle title={pageTitle} />
      <Container>
        <Row>
          <Col className='offset-1 col-10 d-flex justify-content-center'>
            <ul>
              <li>Free shipping on orders of $35 or more!</li>
              <li>Items are shipped 1 - 3 days after purchase.</li>
              <li>Shipping is a flat rate of $5 to anywhere in the U.S. for orders under $35.</li>
              <li>Doesn't fit? Not quite the color you were hoping for?
                <Link
                  className="text-link" to="/contact"> Please contact us!
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className='mt-4 mb-4'>
          <Col className='offset-1 col-10 d-flex justify-content-center'>
            <p>
              We will do anything we can to help make it right, including
              accepting returns if shipped back to us within 1 week of receipt.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShippingPage;