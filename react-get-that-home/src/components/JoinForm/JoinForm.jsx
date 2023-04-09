import { Form, Formik } from 'formik';
import React from 'react';
import { useParams } from 'react-router-dom';
import Field from '../Inputs/Formik/Input';
import * as Yup from 'yup';
import Button from '../Button/Button';
import FormJoin from './JoinForm-UI';

const JoinForm = () => {
  const { id } = useParams();

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    password: '',
    'password confirmation': '',
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validates = Yup.object({
    name: Yup.string().required('Please Enter a name'),
    email: Yup.string().email().required('Please Enter your Email'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Please Enter your Phone'),
    password: Yup.string()
      .min(6, 'At least 6 characteres')
      .required('Please Enter your password'),
    'password confirmation': Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please Enter your password confirmation'),
  });

  return (
    <FormJoin>
      <div className='form'>
        <p className='title-create'>create you account</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validates}
          onSubmit={(values) => {
            setTimeout(() => {
              const data = {
                name: values.name,
                email: values.email,
                phone: +values.phone,
                password: values.password,
                role: id,
              };
              console.log(data);
            }, 1000);
          }}
        >
          {({ isValid }) => (
            <Form>
              <Field
                label={'name'}
                name='name'
                type='text'
                placeholder='John Doe'
              />
              <Field
                label={'email'}
                name='email'
                type='email'
                placeholder='user@mail.com'
              />
              <Field
                label={'phone'}
                name='phone'
                type='number'
                placeholder='999-999-999'
              />
              <Field
                label={'password'}
                name='password'
                type='password'
                placeholder='******'
              />
              <Field
                label={'password confirmation'}
                name='password confirmation'
                type='password'
                placeholder='******'
              />
              <div className='btn-create-account'>
                <Button type={'primary'} typeBtn={'submit'} disabled={!isValid}>
                  create account
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </FormJoin>
  );
};

export default JoinForm;
