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
  DropdownMenu,
  Tooltip
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import useLocalStorageState from 'use-local-storage-state';
import SiteLogo from '../app/assets/img/logo.png';
import orderForm from '../app/assets/docs/order_form.pdf';
import CartWidget from './CartWidget/CartWidget';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [cart,] = useLocalStorageState('cart', {});
  const getProducts = () => Object.values(cart || {});
  const numItems = getProducts().reduce((accumulator, product) => accumulator + product.quantity, 0);

  return (
    <>
      <header className='jumbotron'>
        <Container fluid>
          <Row className='text-center'>
            <Col md='2' className='mt-3'>
              <NavbarBrand href='/'>
                <img
                  id='logo' src={SiteLogo} alt='Creative Crafting Logo'
                />
              </NavbarBrand>
            </Col>
            <Col md='8' className='mt-3 mb-3'>
              <h1>Creative Crafting: A Mother -Daughter Collaboration</h1>
              <h2>You can do anything together if you put your hearts into it</h2>
            </Col>
          </Row>
        </Container>
      </header>
      <Navbar dark expand='lg'>
        <NavbarToggler className='navbar-toggler'
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <Collapse isOpen={menuOpen} navbar>
          <Nav id='top-navbar' navbar>
            <NavItem className='navbar-item'>
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>
            </NavItem>
            <NavItem className='navbar-item'>
              <UncontrolledDropdown>
                <DropdownToggle nav caret>
                  Products
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>
                    <NavLink className='nav-link nav-dropdown-item' to='/hats'>
                      Hats
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className='nav-link nav-dropdown-item' to='/keychains'>
                      Keychains
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className='nav-link nav-dropdown-item' to='/necklaces'>
                      Necklaces
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
            <NavItem className='navbar-item'>
              <NavLink className='nav-link' to='/shipping'>
                Shipping & Returns
              </NavLink>
            </NavItem>
            <NavItem className='navbar-item'>
              <NavLink className='nav-link' to='/about'>
                About
              </NavLink>
            </NavItem>
            <NavItem className='navbar-item'>
              <NavLink className='nav-link' to='/contact'>
                Contact
              </NavLink>
            </NavItem>
            <NavItem className='navbar-item navbar-right-item'>
              <a className='nav-link'
                href={orderForm} target='_blank' rel='noreferrer'>
                Orders
              </a>
            </NavItem>
            <NavItem className='navbar-item navbar-right-item position-absolute end-0'>
              <NavLink className='nav-link' to='/cart'>
                {/* <i id='cartIcon' className='fa fa-shopping-cart' aria-hidden='true'></i> */}
                <CartWidget numItems={numItems} />
                {/* <Tooltip
                  isOpen={tooltipOpen}
                  placement='right'
                  target='cartIcon'
                  toggle={() => { setTooltipOpen(!tooltipOpen) }}>
                  Shopping Cart functionality coming soon!
                </Tooltip> */}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;