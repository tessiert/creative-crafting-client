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
                        <Col md='3' lg='4' className='mt-3 mb-3 text-center align-middle'>
                            <a role='button' className='btn btn-link' target='_blank' rel='noreferrer'
                                href='https://www.etsy.com/shop/LoriLeighHandcrafted?ref=l2-about-shopname'>
                                <img id='etsy-icon' src={ EtsyIcon } alt='Etsy Icon' />
                            </a>
                        </Col>
                        <Col md='4' lg='4' className='mt-4 text-center align-middle'>
                            <small>&copy;Copyright 2023<br />Creative Crafting</small>
                        </Col>
                        <Col md='5' lg='4' className='mt-4 text-center align-middle'>
                            <a role='button' id='email' className='btn btn-link' href='mailto:CreativeCrafting@gmail.com'>
                                <i className='fa fa-envelope-o'></i> CreativeCrafting@gmail.com</a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer;




