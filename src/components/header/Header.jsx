import React from 'react';
import './header.css';

const Header = ({ theme, changeTheme }) => {
  return (
    <div className='header'>
      <div>devfinder</div>
      <button onClick={changeTheme}>
        {theme ? 'DARK' : 'LIGHT'}
        {theme ?
          <i className="fa-solid fa-moon"></i> :
          <i className="fa-solid fa-sun"></i>
        }
      </button>
    </div>
  );
}

export default Header;