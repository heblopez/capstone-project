import React from 'react';
import SectionSearch from '../Sections/SectionSearch/SectionSearch';
import SectionPrice from '../Sections/SectionPrice/SectionPrice';
import SectionCreateAccount from '../Sections/SectionCreactAccount/SectionCreateAccount';
import SectionTeam from '../Sections/SectionTeam/SectionTeam';

const Authenticate = () => {
  return (
    <div>
      <SectionSearch />
      <SectionPrice />
      <SectionCreateAccount />
      <SectionTeam />
    </div>
  );
};

export default Authenticate;
