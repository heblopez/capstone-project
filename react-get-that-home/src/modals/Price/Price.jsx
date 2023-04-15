import { Form, Formik } from 'formik';
import React from 'react';
import Field from '../../components/Inputs/Formik/Input';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import Button from '../../components/Button/Button';
import * as Yup from 'yup';
import PrimeModal from './Price-UI';

const Price = ({ getData, onClose }) => {
  function kFormatter(num) {
    if (num === 0) return '';

    return Math.abs(num) > 999
      ? '$' + Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
      : Math.sign(num) * Math.abs(num);
  }

  return (
    <PrimeModal>
      <div className='container'>
        <Formik
          initialValues={{ min: '', max: '' }}
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
