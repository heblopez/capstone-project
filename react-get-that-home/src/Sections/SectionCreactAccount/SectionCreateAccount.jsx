import React from 'react';
import Button from '../../components/Button/Button';
import { CreateSection } from './SectionCreateAccount-UI';

const SectionCreateAccount = () => {
  return (
    <CreateSection>
      <div className='field-create'>
        <p>Getting someone to rent your apartment has never been this easy</p>
        <Button clase={'btn--primary-xl'}>Create an Account now</Button>
      </div>
    </CreateSection>
  );
};

export default SectionCreateAccount;
