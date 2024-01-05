import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Contact = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cthp8xd",
        "template_gt90bno",
        form.current,
        "EH5XM71TgfKiW1cIq"
      )
      .then(
        (result) => {
          
          setEmailSent(true);
          form.current.reset();
          
        },
        (error) => {
          window.alert("Error sending email. Please try again later.");
        }
      );
  };

  if (emailSent) {
    return (
      <ContainerSuccess>
        <h3>Email sent successfully</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setEmailSent(false);
          }}
        >
          Back to the top
        </button>
      </ContainerSuccess>
    );
  }

  return (
    <StyledContactForm>
       <h2>Get in touch using the form below</h2>
      <form ref={form} onSubmit={sendEmail}>
      <input
          placeholder="Your Name" type="text" name="user_name"  required
        />
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="user_email"
          required
        />
        <textarea 
          required
          placeholder="Leave your message"
          id="message" 
          name="message" />
        <button type="submit" value="Send">
          Submit
        </button>
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
margin-top: 10rem;
display: grid;
backround-color: black;
place-items: center;
h2{
  text-align: center;
  margin-bottom: 2rem;
}
form{
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: grey;
  align-items: center;
  gap: 1rem;
  width: 100%;
  input, textarea{
    width: 60rem;
    padding: 1rem 2rem;
    border-radius: 1.6rem;
    outline: none;
    border: none;
    background:none;
    border: 1px solid #FFF;
    font-weight: 600;
    &::placeholder{
      color: black;
    }
  }

  textarea{
    height: 20rem;
    color:black;
    overflow-y: auto;
    resize: none;
  }

  button{
    padding: 1rem 6rem;
    margin-top: 2rem;
    text-transform: uppercase;
  }

}

@media (max-width: 740px){
  form{
    width: 100%;
    
    input,textarea{
      width: 100%;
    }
  }
}
`

export const ContainerSuccess = styled.div`
  margin-top: 10rem;
  text-align: center;

  button{
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    color: #fbfbfb;
  }
`