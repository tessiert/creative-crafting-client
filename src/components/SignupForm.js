import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Label, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { userSignup, validateLogin } from "../features/user/userSlice";
import { validateSignupForm } from "../utils/validateSignupForm";
import PasswordField from "./PasswordField";

const SignupForm = () => {
  const [, setSignupModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validateLogin());
  }, [dispatch]);

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
  );
}

export default SignupForm;