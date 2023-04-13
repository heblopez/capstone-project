import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import ContainerModal from './LoginForm-UI';
import Button from '../Button/Button';
import { RiUserReceived2Line } from 'react-icons/ri';
import * as Yup from 'yup';
import Field from '../Inputs/Formik/Input';
import { useUser } from '../../context/UserContext';

const LoginForm = () => {
  const { login } = useUser();
  const initialValues = {
    email: '',
    password: '',
  };

  const validates = Yup.object({
    email: Yup.string().email().required('Please Enter your email'),
    password: Yup.string().required('Please Enter your password'),
  });

  return (
    <ContainerModal>
      <div className='content-modal'>
        <p className='title-login'>Login</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validates}
          onSubmit={(values) => {
            login(values);
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
