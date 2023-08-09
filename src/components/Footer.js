import {
    Container,
    Row,
    Col
} from 'reactstrap';
import EtsyIcon from '../app/assets/img/etsy_icon.png';

const Footer = () => {
    return (
        <>
            <footer className='jumbotron'>
                <Container fluid>
                    <Row>
                        <Col className='md-3 lg-4 mt-4 mb-4 text-center align-middle'>
                            <a role='button' class='btn btn-link' target='_blank' rel='noreferrer'
                                href='https://www.etsy.com/shop/LoriLeighHandcrafted?ref=l2-about-shopname'>
                                <img id='etsy-icon' src={ EtsyIcon } alt='Etsy Icon' />
                            </a>
                        </Col>
                        <Col className='md-4 mt-4 text-center align-middle'>
                            <small>&copy;Copyright 2023<br />Creative Crafting</small>
                        </Col>
                        <Col className='md-5 lg-4 mt-5 text-center align-middle'>
                            <a role='button' id='email' class='btn btn-link' href='mailto:CreativeCrafting@gmail.com'>
                                <i class='fa fa-envelope-o'></i> CreativeCrafting@gmail.com</a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer;




