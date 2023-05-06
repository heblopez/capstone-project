import React from 'react';
import landing from '../../assets/landing.svg';
import { SearchContainer } from './SectionSearch-UI';
import Search from '../../components/Search/Search';

const SectionSearch = () => {
  return (
    <SearchContainer>
      <img src={landing} alt='' />
      <div className='home'>
        <h1>Meet your new Home</h1>
        <h2>The easiest way to find where you belong</h2>
        <Search />
      </div>
    </SearchContainer>
  );
};

export default SectionSearch;
