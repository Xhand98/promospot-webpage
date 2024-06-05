import React, { useState } from 'react';
import Searchbar from './Searchbar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faX } from '@fortawesome/free-solid-svg-icons';

const SearchToggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div className='searchtogglecont'>
      <button className={`searchtoggle ${isToggled ? 'active' : ''}`} onClick={toggleHandler}>
        <i><FontAwesomeIcon icon={isToggled ? faX : faSearch} className={`iconito ${isToggled ? 'active' : ''}`} /></i>
      </button>
      {isToggled && <Searchbar />}
    </div>
  );
};

export default SearchToggle;
