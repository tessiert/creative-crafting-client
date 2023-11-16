import { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { Label, Button } from 'reactstrap';
import { Field, ErrorMessage } from 'formik';

const PasswordField = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Label htmlFor='password'>Password</Label>
      <span className='d-flex justify-around items-center'>
        <Field
          id='password'
          name='password'
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          maxLength='20'
          className='form-control'
        />
        <Button color='secondary' onClick={() => setShowPassword(!showPassword)}>
          <Icon className="absolute mr-10" icon={showPassword ? eyeOff : eye} />
        </Button>
      </span>
      <ErrorMessage name='password'>
        {(msg) => <p className='text-danger'>{msg}</p>}
      </ErrorMessage>
    </>
  );
};

export default PasswordField;