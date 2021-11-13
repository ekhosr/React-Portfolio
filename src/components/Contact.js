import React, { useState } from 'react';

import {validateEmail} from '../utils/helpers';


const styles ={
    formStyle:{
        padding:'10px',
        display:'flex',
        flexDirection:'column',
        width:'250px'
    },
    formInputStyle:{
        display:'block',
        marginTop:'5px',
        marginBottom:'5px',
    }
}
function Contact() {
  const [name, setName] = useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const inputType = name;
    const inputValue = value;

    if(inputType ==='name'){
        setName(inputValue)
    }else if(inputType === 'email'){
        setEmail(inputValue)
    }else{
        setMessage(inputValue)
    }

  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
   
    if(!validateEmail(email) || !email){
      setErrorMessage('email is invalid');
      return;
    }
    if(!name){
      setErrorMessage('name is empty');
      return;
    }
    if(!message){
      setErrorMessage('message is empty');
      return;
    }

    window.open(`mailto:ekhosr@gmail.com?body=${message}`);

    setName('');
    setEmail('');
    setMessage('');
    
  };

  return (
    <div>
      
      <form className="form" style={styles.formStyle}>
        <h3>Name</h3>
        <input style={styles.formInputStyle}
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <h3>Email</h3>
        <input style={styles.formInputStyle}
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email"
        />
        <h3>Message</h3>
        <textarea  value={message} style={styles.formInputStyle} rows="4" name="message" onChange={handleInputChange} >
        
  
        </textarea>

        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </form>
    </div>
  );
}

export default Contact;