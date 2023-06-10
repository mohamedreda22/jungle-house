import { useState } from 'react';
import styles from '../styles/Footer.css';

function Footer() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    if (!inputValue.includes('@')) {
      setError('Attention, this is not a valid email address 😥');
    } else {
      setError('');
    }
  }

  return (
    <footer className='jh-footer'>
      <div className='jh-footer-elem'>For plant enthusiasts 🌿🌱🌵</div>
      <div className='jh-footer-elem'>Subscribe to our newsletter:</div>
      <label htmlFor="emailInput">Enter your email:</label>
      <input
        id="emailInput"
        placeholder="Enter your email"
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur}
      />
      {error && <div className={styles.error}>{error}</div>}
      <button>Submit</button>
    </footer>
  );
}

export default Footer;
