import React from 'react';
import {Link} from 'react-router-dom';
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <>
      <figure className='snip1344' style={{borderRadius: '20px'}}>
      <img
        src={avatar_url}
        alt=''
        className='background'
      />
      <img className='profile' src={avatar_url} alt='pr'/>
      <figcaption>
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className='btn btn-light my-1' value='More'>
        More
      </Link>
      </figcaption>
      </figure>
    </>
   
  );
};

export default UserItem;
