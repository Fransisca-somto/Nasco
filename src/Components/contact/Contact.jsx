import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zif1b9c', 'template_gqqo4bz', form.current, 'REKiuLY11HfFlhkrp')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.error(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>fransiscasomto@gmail.com</h5>
            <a href="mailto:fransiscasomto@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Fransisca Nwosu</h5>
            <a href="https://m.me/fransisca.nwosu.77" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+2348069971549</h5>
            <a
              href="https://api.whatsapp.com/send?phone=2348069971549"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>

        {/* ===== END OF CONTACT OPTIONS ====== */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Fullname" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
