import { Form, Formik } from 'formik';
import React from 'react';
import ContainerModal from './LoginForm-UI';
import Button from '../Button/Button';
import { RiUserReceived2Line } from 'react-icons/ri';
import * as Yup from 'yup';
import Field from '../Inputs/Formik/Input';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validates = Yup.object({
    email: Yup.string().email().required('Please Enter your email'),
    password: Yup.string()
      .required('Please Enter your password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
      ),
  });

  return (
    <ContainerModal>
      <div className='content-modal'>
        <p className='title-login'>Login</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validates}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <Field
              label={'email'}
              name='email'
              type='email'
              placeholder='user@mail.com'
              required
            />
            <Field
              label={'password'}
              name='password'
              type='password'
              placeholder='******'
              required
            />
            <div className='btn-login-modal'>
              <Button type={'primary'} typeBtn={'submit'}>
                <RiUserReceived2Line />
                Login
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </ContainerModal>
  );
};

export default LoginForm;
