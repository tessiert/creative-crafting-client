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
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Tooltip
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateLoginForm } from '../utils/validateLoginForm';
import { validateSignupForm } from '../utils/validateSignupForm';
import PasswordField from './PasswordField';
import UserAvatar from '../features/user/UserAvatar';
import {
  getFirstname,
  isAuthenticated,
  userLogin,
  userSignup,
  userLogout,
  validateLogin
} from '../features/user/userSlice';
import useLocalStorageState from 'use-local-storage-state';
import SiteLogo from '../app/assets/img/logo.png';
import CartWidget from './CartWidget/CartWidget';

const Header = ({ accountNavOpen = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  const auth = useSelector(isAuthenticated);
  const firstname = useSelector(getFirstname);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validateLogin());
  }, [dispatch]);

  const [cart,] = useLocalStorageState('cart', {});
  const getProducts = () => Object.values(cart || {});
  const numItems = getProducts().reduce((accumulator, product) => accumulator + product.quantity, 0);

  const handleLogin = (values) => {
    dispatch(
      userLogin({
        username: values.username,
        password: values.password
      })
    );
    setLoginModalOpen(false);
  };

  const handleLogout = () => {
    dispatch(userLogout('dummy'));
    setLoginModalOpen(false);
  }

  const handleSignup = (values) => {
    dispatch(
      userSignup({
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.userEmail,
        username: values.username,
        password: values.password
      })
    );
    setSignupModalOpen(false);
  };

  const accountOptions = (
    <NavItem className='navbar-item'>
      <UncontrolledDropdown>
        <DropdownToggle nav caret>
          {auth ? <UserAvatar firstname={firstname} /> : 'Account'}
        </DropdownToggle>
        <DropdownMenu end>
          <DropdownItem>
            <NavLink
              id='nav-orders'
              className='nav-disabled nav-link nav-dropdown-item'
              to={window.location.pathname}>
              Orders
            </NavLink>
            <Tooltip
              placement={'right'}
              isOpen={tooltipOpen}
              target={'nav-orders'}
              toggle={toggle}
            >
              Order History Coming Soon!
            </Tooltip>
          </DropdownItem>
          {auth ? (
            <DropdownItem>
              <NavLink
                className='nav-link nav-dropdown-item'
                onClick={() => handleLogout()}
                to={window.location.pathname}
              >
                Logout
              </NavLink>
            </DropdownItem>
          ) : (
            <>
              <DropdownItem isOpen={accountNavOpen}>
                <NavLink
                  className='nav-link nav-dropdown-item'
                  to={window.location.pathname}
                  onClick={() => setLoginModalOpen(true)}
                >
                  Sign In
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink
                  className='nav-link nav-dropdown-item'
                  to={window.location.pathname}
                  onClick={() => setSignupModalOpen(true)}
                >
                  Register
                </NavLink>
              </DropdownItem>
            </>
          )}
        </DropdownMenu>
      </UncontrolledDropdown>
    </NavItem>
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
                    <NavLink className='nav-link nav-dropdown-item' to='/crochet-hats'>
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
            {accountOptions}
          </Nav>
        </Collapse>
      </Navbar>
      <Modal isOpen={loginModalOpen}>
        <ModalHeader toggle={() => setLoginModalOpen(false)}>
          Sign in to your account
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            onSubmit={handleLogin}
            validate={validateLoginForm}
          >
            <Form>
              <FormGroup>
                <Label htmlFor='username'>Username</Label>
                <Field
                  id='username'
                  name='username'
                  placeholder='Username'
                  maxLength='20'
                  className='form-control'
                />
                <ErrorMessage name='username'>
                  {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <PasswordField />
              </FormGroup>
              <Button type='submit' color='success'>
                Submit
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
      <Modal isOpen={signupModalOpen}>
        <ModalHeader toggle={() => setSignupModalOpen(false)}>
          Create an account
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              firstname: '',
              lastname: '',
              userEmail: '',
              username: '',
              password: ''
            }}
            onSubmit={handleSignup}
            validate={validateSignupForm}
          >
            <Form>
              <FormGroup>
                <Label htmlFor='firstname'>First Name</Label>
                <Field
                  id='firstname'
                  name='firstname'
                  placeholder='First Name'
                  maxLength='20'
                  className='form-control'
                />
                <ErrorMessage name='firstname'>
                  {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='lastname'>Last Name</Label>
                <Field
                  id='lastname'
                  name='lastname'
                  placeholder='Last Name'
                  maxLength='20'
                  className='form-control'
                />
                <ErrorMessage name='lastname'>
                  {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='userEmail'>Email</Label>
                <Field
                  id='userEmail'
                  name='userEmail'
                  placeholder='Email'
                  maxLength='50'
                  className='form-control'
                />
                <ErrorMessage name='userEmail'>
                  {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='username'>Username</Label>
                <Field
                  id='username'
                  name='username'
                  placeholder='Username'
                  maxLength='20'
                  className='form-control'
                />
                <ErrorMessage name='username'>
                  {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <PasswordField />
              </FormGroup>
              <Button type='submit' color='success'>
                Submit
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Header;