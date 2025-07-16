"use client";

import React, { useState, useRef } from "react";
import "./contactForm.scss";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(null);
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "ed74b4f9-4df5-490a-a61f-f162acacfa4c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        formRef.current?.reset();
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setErrorMessage(
          "There was an issue submitting your message. Please try again."
        );
      }
    } catch (error) {
      setErrorMessage(
        "Failed to send message. Please check your internet connection and try again later."
      );
    }
  };

  return (
    <div className="send-email-container">
      <h2>------------------------------------</h2>
      <h1>
        <pre style={{ fontFamily: "monospace", fontSize: "12px" }}>
          {`  ___ ___ .__  __                                   
 /   |   \\|__|/  |_    _____   ____    __ ________  
/    ~    \\  \\   __\\  /     \\_/ __ \\  |  |  \\____ \\ 
\\    Y    /  ||  |   |  Y Y  \\  ___/  |  |  /  |_  |
 \\___|_  /|__||__|   |__|_|  /\\___  > |____/|   __/ 
       \\/                  \\/     \\/        |__|`}
        </pre>
      </h1>
      <h2>------------------------------------</h2>
      <p>
        Here you can send me a letter which can contain literally anything
        whether it's hiring me (please), needing help upgrading your online
        presence, telling me how awesome my portfolio is, sending any feedback
        or bug sightings in any of my project or just recommending me an album
        or book or movie or tv show or or just want to say hi im open to hear
        whatever you have to say and i'll do my best to reach out back.
      </p>
      <h2>------------------------------------</h2>
      <form ref={formRef} onSubmit={onSubmit} className="send-email-form">
        <label className="send-email-label">Email</label>
        <input
          type="email"
          name="email"
          required
          className="send-email-input"
          disabled={submitted}
        />

        <label className="send-email-label">Name</label>
        <input
          type="text"
          name="name"
          required
          className="send-email-input"
          disabled={submitted}
        />

        <label className="send-email-label">Message</label>
        <textarea
          name="message"
          required
          className="send-email-textarea"
          disabled={submitted}
        ></textarea>

        <button
          type="submit"
          className="send-email-button"
          disabled={submitted}
        >
          Submit
        </button>
      </form>

      {submitted && (
        <div className="send-email-overlay send-email-overlay-success">
          <div className="send-email-message">
            <span>Your message has been submitted successfully!</span>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="send-email-overlay send-email-overlay-error">
          <div className="send-email-message">
            <span>{errorMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
