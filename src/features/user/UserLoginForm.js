import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from './userSlice';
import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  NavLink,
  Button,
  DropdownItem
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateLoginForm } from '../../utils/validateLoginForm';
import PasswordField from '../../components/PasswordField';

const UserLoginForm = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = (values) => {
    dispatch(
      userLogin({
        username: values.username,
        password: values.password
      })
    );
    setLoginModalOpen(false);
  };

  return (
    <>
      {/* <span className='navbar-text navbar-item'> */}
      <DropdownItem>
        <NavLink
          className='nav-link nav-dropdown-item'
          to={window.location.pathname}
          onClick={() => setLoginModalOpen(true)}
        >
          Login
        </NavLink>
      </DropdownItem>
      {/* </span> */}
      <Modal isOpen={loginModalOpen}>
        <ModalHeader toggle={() => setLoginModalOpen(false)}>
          Login
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
                Login
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default UserLoginForm;
