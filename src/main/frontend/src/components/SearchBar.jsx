import React, { useState } from 'react';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log('검색어:', searchQuery);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        value={searchQuery}
        onChange={handleInputChange}
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>
        <svg width="300" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="20" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3708 24.5651C20.9961 25.5127 19.3297 26.0674 17.5337 26.0674C12.8207 26.0674 9 22.2468 9 17.5337C9 12.8207 12.8207 9 17.5337 9C22.2468 9 26.0674 12.8207 26.0674 17.5337C26.0674 19.3297 25.5127 20.9961 24.5651 22.3708L30.2678 28.0735L28.0735 30.2678L22.3708 24.5651ZM17.5333 22.9643C20.5325 22.9643 22.9639 20.5329 22.9639 17.5337C22.9639 14.5345 20.5325 12.1032 17.5333 12.1032C14.5341 12.1032 12.1028 14.5345 12.1028 17.5337C12.1028 20.5329 14.5341 22.9643 17.5333 22.9643Z" fill="#747474"/>
        </svg>
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '20px',
    padding: '5px 10px',
    width: '400px',
    height: '50px',
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '16px',
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '30px',
  },
};

export default SearchBar;
