import { Form, Formik } from 'formik';
import React from 'react';
import InputCR from '../../components/Inputs/Formik/InputCR';
import Button from '../../components/Button/Button';
import ModalProperty from './Property-UI';

const Property = () => {
  return (
    <ModalProperty>
      <div className='container'>
        <Formik
          initialValues={{
            house: false,
            aparment: false,
          }}
          onSubmit={(values) => {
            setTimeout(() => {
              const data = {
                house: values.house ? 1 : null,
                aparment: values.aparment ? 0 : null,
              };
              console.log(values);
              console.log(data);
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
                    <InputCR type='checkbox' id='aparment' name='aparment'>
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
                  (values.house || values.aparment) && 'result-content'
                }`}
              >
                <div className='result'>
                  <p>
                    {values.house && 'Houser'}{' '}
                    {values.house && values.aparment && '&'}{' '}
                    {values.aparment && 'Aparments'}
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
