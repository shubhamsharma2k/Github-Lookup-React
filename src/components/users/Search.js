import { React, useState } from 'react';
const Search = ({ searchUsers, setAlert, clearUsers, showClear }) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter a User!', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Enter User'
          value={text}
          style={{ width: '40%' }}
          onChange={onChange}
        />
        <input
          type='submit'
          className='btn-fb'
          value='Search'
          style={{ marginLeft: '30px' }}
        />
      </form>
      {showClear && (
        <button type='button' className='btn btn-light' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
