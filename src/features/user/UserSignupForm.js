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

const UserSignupForm = () => {
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSignup = (values) => {
    dispatch(
      userSignup({
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        username: values.username,
        password: values.password
      })
    );
    setSignupModalOpen(false);
  };

  return (
    <>
      <span className='navbar-text ml-auto'>
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
              email: '',
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
                  className='form-control'
                />
                <ErrorMessage name='lastname'>
                  {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='email'>Email</Label>
                <Field
                  id='email'
                  name='email'
                  placeholder='Email'
                  // maxLength='50'
                  className='form-control'
                />
                <ErrorMessage name='email'>
                  {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='username'>Username</Label>
                <Field
                  id='username'
                  name='username'
                  placeholder='Username'
                  className='form-control'
                />
                <ErrorMessage name='username'>
                  {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='password'>Password</Label>
                <Field
                  id='password'
                  name='password'
                  placeholder='Password'
                  className='form-control'
                />
                <ErrorMessage name='password'>
                  {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
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