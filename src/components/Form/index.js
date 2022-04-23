import React, { useState } from 'react';
import './style.css';
import Footer from '../footer';

// Here we import a helper function that will check if the email is valid
import { checkMessage, validateEmail } from '../../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or Name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }
    if (!checkMessage(message)) {
      setErrorMessage(
        `Hello ${userName}. You need to write a message to proceed.`
      );
      return;
    }
    alert(`Thanks for your message!`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <div class="container">
      <div class="back-profile">
      </div>
      <form>
        <div className="form-group col-sm-5">
          <input className='form-control form-control-lg'
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
          <input className='form-control form-control-lg'
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <textarea className='form-control form-control-lg'
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            rows="3"
            placeholder="Message"
          />
          <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <Footer />;
    </div >
  );
}

export default Form;
