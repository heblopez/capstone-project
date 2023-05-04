import { Form, Formik } from 'formik';
import React from 'react';
import Field from '../../components/Inputs/Formik/Input';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import Button from '../../components/Button/Button';
import * as Yup from 'yup';
import PrimeModal from './Price-UI';

const Price = ({ getData, onClose, initialValues }) => {
  const { min, max } = initialValues;

  const values = {
    min: min === 0 ? '' : min,
    max,
  };
  return (
    <PrimeModal>
      <div className='container'>
        <Formik
          initialValues={values}
          validationSchema={Yup.object({
            min: Yup.number().positive('Must be positive'),
            max: Yup.number().positive('Must be positive'),
          })}
          onSubmit={(values) => {
            setTimeout(() => {
              const data = {
                min: +values.min,
                max: +values.max,
              };
              getData(data);
              onClose();
            }, 500);
          }}
        >
          {({ values }) => (
            <>
              <Form>
                <div className='form'>
                  <div className='input-container'>
                    <p className='label'>price range</p>
                    <div className='inputs'>
                      <div className='min-max'>
                        <Field
                          name='min'
                          type='number'
                          placeholder='min'
                          className='min'
                        >
                          <RiMoneyDollarCircleFill />
                        </Field>
                      </div>
                      <span>-</span>
                      <div className='min-max'>
                        <Field
                          name='max'
                          type='number'
                          placeholder='max'
                          className='max'
                        >
                          <RiMoneyDollarCircleFill />
                        </Field>
                      </div>
                    </div>
                  </div>
                  <div className='btn-done'>
                    <Button typeBtn={'submit'}>done</Button>
                  </div>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </PrimeModal>
  );
};

export default Price;
