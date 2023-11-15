import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
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
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import UserLoginForm from '../features/user/UserLoginForm';
import UserSignupForm from '../features/user/UserSignupForm';
import UserAvatar from '../features/user/UserAvatar';
import {
  getFirstname,
  isAuthenticated,
  userLogout,
  validateLogin
} from '../features/user/userSlice';
import useLocalStorageState from 'use-local-storage-state';
import SiteLogo from '../app/assets/img/logo.png';
import CartWidget from './CartWidget/CartWidget';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const auth = useSelector(isAuthenticated);
  const firstname = useSelector(getFirstname);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validateLogin());
  }, [dispatch]);

  const [cart,] = useLocalStorageState('cart', {});
  const getProducts = () => Object.values(cart || {});
  const numItems = getProducts().reduce((accumulator, product) => accumulator + product.quantity, 0);

  const userOptions = auth ? (
    <>
      <span className='navbar-text navbar-item ml-auto'>
        <Button
          outline
          onClick={() => dispatch(userLogout('dummy'))}
          style={{
            color: 'white',
            border: '1px solid white',
            margin: '5px'
          }}
        >
          <i className='fa fa-sign-out fa-lg' /> Logout
        </Button>
      </span>
      <UserAvatar firstname={firstname} />
    </>
  ) : (
    <>
      <UserLoginForm />
      <UserSignupForm />
    </>
  );

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
      <Navbar dark expand='xl'>
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
            <NavItem className='navbar-item navbar-right-item position-absolute end-0'>
              <NavLink className='nav-link' to='/cart'>
                <CartWidget numItems={numItems} />
              </NavLink>
            </NavItem>
          </Nav>
          {userOptions}
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;