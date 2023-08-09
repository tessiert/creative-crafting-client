import { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import SiteLogo from '../app/assets/img/logo.png';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className='jumbotron'>
                <Container fluid>
                    <Row className='m-0 text-center'>
                        <Col className='mt-4 p-0 md-2'>
                            <NavbarBrand href='/'>
                                <img
                                    id='logo' src={SiteLogo} alt='Creative Crafting Logo'
                                />
                            </NavbarBrand>
                        </Col>
                        <Col className='mt-4 mb-4 p-0 sm-8'>
                            <h1>Creative Crafting: A Mother -Daughter Collaboration</h1>
                            <h2>You can do anything together if you put your hearts into it</h2>
                        </Col>
                        <Col className='mt-4 p-0 md-2'>
                            <NavbarBrand href='/'>
                                <img
                                    id='logo' src={SiteLogo} alt='Creative Crafting Logo'
                                />
                            </NavbarBrand>
                        </Col>
                    </Row>
                </Container>
            </header>
            <Navbar dark expand='md'>
                <NavbarToggler className='navbar-toggler'
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav id='top-navbar' navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <UncontrolledDropdown>
                                <DropdownToggle nav caret>
                                    Products
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Hats
                                    </DropdownItem>
                                    <DropdownItem>
                                        Keychains
                                    </DropdownItem>
                                    <DropdownItem>
                                        Necklaces
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                Shipping & Returns
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                Contact
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id='top-navbar-orders' className='nav-link' to='/'>
                                Orders
                            </NavLink>
                        </NavItem>
                        <NavItem className='position-absolute end-0'>
                            <NavLink className='nav-link' to='#'>
                                <i className='fa fa-shopping-cart' aria-hidden='true'></i>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <a id="back-to-top" href="#" class="btn btn-light btn-sm back-to-top" role="button">
                <i class="fa fa-chevron-up" aria-hidden="true"></i>
            </a>
        </>
    );
};

export default Header;