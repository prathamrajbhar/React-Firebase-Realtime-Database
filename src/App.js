import React, { useState } from 'react';
import styles from './style.css';
import database from './database';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // To push data in any of the object and create array with unique keys
  const Push = () => {
    database.ref('contacts/').push({
      name: name,
      email: email,
      message: message
    });
    setName('');
    setEmail('');
    setMessage('');
  };
  

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Contact Form</h1>
      <p className={styles.intro}>
        This is a simple example of a React component.
      </p>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text"
          name="name"
          onChange={e => setName(e.target.value)}
          value={name}
          className={styles.input} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          className={styles.input} />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea name="message"
          onChange={e => setMessage(e.target.value)}
          value={message}
          className={styles.textarea} />
      </div>
      <button className={styles.button} onClick={Push}>
        Send
      </button>
    </div>
  );
};


export default App;