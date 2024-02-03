import React from "react";
import styles from "./Button.module.css";
//importing icons from react icons
import { MdMessage } from "react-icons/md";

const Button = ({ isOutLine, icon, text, ...rest }) => {
  //
  return (
    <button
      {...rest}
      className={isOutLine ? styles.outline_btn : styles.primary_button}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
