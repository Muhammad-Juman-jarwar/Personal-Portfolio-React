import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)

  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [textField, setTextField] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setNameField("");
    setEmailField("");
    setTextField("");

    emailjs
      .sendForm(
        "service_1zpqrx2",
        "template_vecnqgh",
        form.current,
        "9w88iaI221xtgRlcq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input required onChange={e => setNameField(e.target.value)} value={nameField} type="text" name="user_name" className="user"  placeholder="Name"/>
          <input required onChange={e => setEmailField(e.target.value)} value={emailField} type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea required onChange={e => setTextField(e.target.value)} value={textField} name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
