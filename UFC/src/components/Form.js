import "./FormStyles.css";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vxu766g', 'template_rb6ta8e', form.current, '62HThx1jPnPVEQ5wa')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });

    e.target.reset(); // Optional: Resets the form after submission
  };

  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Subject</label>
            <input type="text" name="subject" required />
            <label>Message</label>
            <textarea name="message" rows="6" placeholder="Type your message here" required />
            <button type="submit" className="btn">Submit</button>
        </form>
    </div>
  );
};

export default Form;
