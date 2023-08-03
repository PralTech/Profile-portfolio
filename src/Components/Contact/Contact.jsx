import React from 'react';
import './Contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  // name and email validations 
  const validateName = () => {
    const nameValue = form.current.user_name.value.trim();
    if (nameValue === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  const validateEmail = () => {
    const emailValue = form.current.user_email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === "") {
      setEmailError("Email is required");
    } else if (!emailPattern.test(emailValue)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    validateName();
    validateEmail();

    if (nameError || emailError) {
      console.log("Form validation failed. Cannot send email.");
    } else {
      emailjs
        .sendForm("service_bbd60k9", "template_8365jvq", form.current, "wAY_foO7ykSsJe1Fw")
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);

            setTimeout(() => {
              form.current.reset();
              setDone(false);
            }, 2000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="contact-form">
      <div className="c-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} action='' >
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            required
            onBlur={validateName}
          />
          {nameError && <span className="error">{nameError}</span>}
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            required
            onBlur={validateEmail}
          />
          {emailError && <span className="error">{emailError}</span>}
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            required
          />
          <input
            type="submit"
            value="Send"
            className="c-button"
            onClick={sendEmail}
            required
          />
          <span>{done && "Thanks for Contacting me!"}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
