import { Form, Formik } from 'formik';
import React from 'react';
import InputCR from '../../components/Inputs/Formik/InputCR';
import Button from '../../components/Button/Button';
import ModalProperty from './Property-UI';

const Property = ({getProperty}) => {
  return (
    <ModalProperty>
      <div className='container'>
        <Formik
          initialValues={{
            house: false,
            apartment: false,
          }}
          onSubmit={(values) => {
            setTimeout(() => {
              const data = {
                house: values.house ? 'house' : null,
                apartment: values.apartment ? 'apartment' : null,
              };
              console.log(data);
              getProperty(data);
            }, 600);
          }}
        >
          {({ values }) => (
            <>
              <Form>
                <div className='form'>
                  <p className='label'>Property type</p>
                  <div className='inputs-checkbox'>
                    <InputCR type='checkbox' id='house' name='house'>
                      Houses
                    </InputCR>
                    <InputCR type='checkbox' id='apartment' name='apartment'>
                      Apartments
                    </InputCR>
                  </div>
                  <div className='btn-done'>
                    <Button typeBtn={'submit'}>Done</Button>
                  </div>
                </div>
              </Form>
              <div
                className={`${
                  (values.house || values.apartment) && 'result-content'
                }`}
              >
                <div className='result'>
                  <p>
                    {values.house && 'Houser'}{' '}
                    {values.house && values.apartment && '&'}{' '}
                    {values.apartment && 'Aparments'}
                  </p>
                </div>
              </div>
            </>
          )}
        </Formik>
      </div>
    </ModalProperty>
  );
};

export default Property;
