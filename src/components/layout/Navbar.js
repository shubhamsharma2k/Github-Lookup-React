import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar bg-dark all-center'>
        <h2>
          <i className='fab fa-github'></i>Github Lookup
        </h2>
        <ul>
          <li>
          <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      
      </nav>
    </div>
  );
};

export default Navbar;
