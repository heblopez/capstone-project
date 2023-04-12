import React from 'react';
import ModalMore from './More-UI';
import Button from '../../components/Button/Button';
import { Form, Formik } from 'formik';
import Field from '../../components/Inputs/Formik/Input';
import InputCR from '../../components/Inputs/Formik/InputCR';
import * as Yup from 'yup';

const More = ({ getMore }) => {
  const initialValues = {
    pets: false,
    min: '',
    max: '',
  };

  return (
    <ModalMore>
      <div className='container'>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            pets: Yup.boolean(),
            min: Yup.number().positive('Must be posivite'),
            max: Yup.number().positive('Must be positive'),
          })}
          onSubmit={(values) => {
            setTimeout(() => {
              const data = {
                pets: values.pets,
                min: +values.min,
                max: +values.max,
              };
              getMore(data);
            }, 1000);
          }}
        >
          <Form>
            <div className='form'>
              <InputCR type='checkbox' id='pets' name='pets'>
                Pets allowed
              </InputCR>

              <div className='minmax-container'>
                <p className='label'>Area in m2</p>

                <div className='inputs'>
                  <div className='min-max'>
                    <Field name='min' placeholder='min' type='number' />
                  </div>

                  <span>-</span>

                  <div className='min-max'>
                    <Field name='max' placeholder='max' type='number' />
                  </div>
                </div>
              </div>

              <div className='btn-done'>
                <Button typeBtn={'submit'}>done</Button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </ModalMore>
  );
};

export default More;
