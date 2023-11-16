import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userSignup } from './userSlice';
import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Button
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateSignupForm } from '../../utils/validateSignupForm';
import PasswordField from '../../components/PasswordField';

const UserSignupForm = () => {
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const dispatch = useDispatch();

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

  return (
    <>
      <span className='navbar-text navbar-item ml-auto'>
        <Button
          outline
          onClick={() => setSignupModalOpen(true)}
          style={{ color: 'white', border: '1px solid white' }}
        >
          <i className='fa fa-user-plus fa-lg' /> Sign Up
        </Button>
      </span>
      <Modal isOpen={signupModalOpen}>
        <ModalHeader toggle={() => setSignupModalOpen(false)}>
          Sign Up
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
                Sign Up
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default UserSignupForm;