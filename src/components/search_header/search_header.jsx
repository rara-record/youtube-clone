import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = e => {
    e.preventDefault();
    const value = inputRef.current.value;
    onSearch(value);
  };

  const handleLogoClick = () => {
    window.location = '/';
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch();
  };

  console.log('SearchHeader');

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="logo" />
        <h1 className={styles.title} onClick={handleLogoClick}>
          Youtube
        </h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
});

export default SearchHeader;
