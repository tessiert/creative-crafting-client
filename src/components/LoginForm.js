import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Label, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { userLogin, validateLogin } from "../features/user/userSlice";
import { validateLoginForm } from '../utils/validateLoginForm';
import PasswordField from "./PasswordField";

const LoginForm = () => {
  const [, setLoginModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validateLogin());
  }, [dispatch]);

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
  );
}

export default LoginForm;