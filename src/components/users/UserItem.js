import React from 'react';
import {Link} from 'react-router-dom';
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className='btn btn-dark' value='More'>
        More
      </Link>
    </div>
  );
};

export default UserItem;
