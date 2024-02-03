import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../../Button/Button";

// importing icons from react icons
import { MdMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

function ContactForm() {
  const viaCallSubmit = () => {
    console.log("via call submit");
  };
  return (
    <section className={`${styles.container}`}>
      {/* contact form section */}

      <div className={styles.contactform}>
        {/* form button section */}
        <div className={styles.topbotton}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="34px" />}
          />
          <Button
            onClick={viaCallSubmit}
            text="VIA CALL"
            icon={<IoCallOutline fontSize="34px" />}
          />
        </div>
        <Button
          isOutLine={true}
          text="VIA EMAIL FORM"
          icon={<MdOutlineMail fontSize="34px" />}
        />

        <form>
          <div className={styles.formcontrol}>
            <label for="name">Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className={styles.formcontrol}>
            <label for="email">Email</label>
            <input type="text" placeholder="Email" />
          </div>
          <div className={styles.formcontrol}>
            <label for="text">Text</label>
            <textarea name="text" rows="8" />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>

      <div className={styles.contactimage}>
        <img src="/images/contact.svg" alt="contact image" />
      </div>
    </section>
  );
}

export default ContactForm;
