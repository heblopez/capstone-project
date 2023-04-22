import React from 'react';
import { Searching } from './Search-UI';
import Button from '../Button/Button';
import { Form, Formik } from 'formik';
import Select from '../Inputs/Formik/Select';
import Input from '../Inputs/Formik/Input';
import * as Yup from 'yup';
import { useProp } from '../../context/PropertyContext';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const { setSearchBy } = useProp();
  const initialData = {
    looking: 'apartment',
    want: 'rent',
    where: '',
  };

  const validates = Yup.object({
    looking: Yup.string(),
    want: Yup.string(),
    where: Yup.string(),
  });

  return (
    <Searching>
      <div className='search'>
        <Formik
          initialValues={initialData}
          validationSchema={validates}
          onSubmit={(values) => {
            console.log(values);
            setSearchBy(values);
            navigate('/find_a_home');
          }}
        >
          <Form>
            <div className='search'>
              <Select label={`i'm looking for`} name='looking'>
                <option value='aparment'>An Aparment</option>
                <option value='house'>A House</option>
              </Select>
            </div>
            <div className='search'>
              <Select label={'i want to'} name='want'>
                <option value='rent'>Rent</option>
                <option value='buy'>Buy</option>
              </Select>
            </div>
            <div className='search-input'>
              <Input
                label={'where'}
                name='where'
                placeholder='Favorite district'
              />
            </div>
            <div className='btn'>
              <Button type={'primary'} typebtn={'submit'}>
                search
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </Searching>
  );
};

export default Search;
