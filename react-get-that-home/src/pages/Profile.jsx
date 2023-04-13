import React from 'react';
import { useUser } from '../context/UserContext';
import { BiUser } from 'react-icons/bi';
import Field from '../components/Inputs/Formik/Input';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import Button from '../components/Button/Button';
import styled from '@emotion/styled';
import { colors } from '../styles';

const ProfileContainer = styled.div`
  margin: 30px 0;

  div.container {
    max-width: 810px;
    padding: 0 34px;
    margin: 0 auto;

    div.icon-user {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin: auto;
      background-color: ${colors.shallowGray};
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
      color: ${colors.gray};

      svg {
        width: 80px;
        height: 80px;
      }
    }

    div.form {
      display: flex;
      flex-direction: column;
      gap: 10px;

      div.btn-update {
        margin: 30px auto 0 auto;

        button {
          width: 250px;
        }
      }
    }
  }
`;

const Profile = () => {
  const { user } = useUser();

  const initialValue = {
    email: user.email,
    name: user.name,
    phone: user.phone,
    role: user.role ? 'home seeker' : '',
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validates = Yup.object({
    name: Yup.string().required('Please Enter a name'),
    email: Yup.string().email().required('Please Enter your Email'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Please Enter your Phone'),
  });
  console.log(user.name);

  return (
    <ProfileContainer>
      <div className='container'>
        <div className='icon-user'>
          <BiUser />
        </div>
        <Formik
          initialValues={initialValue}
          validationSchema={validates}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ isValid }) => (
            <Form>
              <div className='form'>
                <Field label={'Email'} name='email' id='email' type='email' />
                <Field label={'Name'} name='name' id='name' type='name' />
                <Field label={'Phone'} name='phone' id='phone' type='number' />
                <Field label={'Role'} name='role' id='role' disabled={true} />

                <div className='btn-update'>
                  <Button typeBtn={'submit'} disabled={!isValid}>
                    Update
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
