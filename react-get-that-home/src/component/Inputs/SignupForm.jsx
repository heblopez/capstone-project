import React from 'react';
import { BsSearch } from 'react-icons/bs';
import Input from './Input';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Select from './Select';

const SignupForm = () => {
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false, // added for our checkbox
          jobType: '', // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type'
            )
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <Input
            label='First Name'
            name='firstName'
            type='text'
            placeholder='Jane'
          >
            <BsSearch />
          </Input>

          <Select label='Options' name='options'>
            <option value=''>Select a Job</option>
            <option value='designer'>Designer</option>
            <option value='Development'>Development</option>
            <option value='products'>Products</option>
          </Select>

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default SignupForm;
