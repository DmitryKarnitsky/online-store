import React from "react";
import style from "./ButtonSend.module.css";

const ButtonSend = (props) => {
  return(
    <div className = {style.wrappButton}>
      <div className = {style.button}>SEND</div> 
    </div>
  )
};

export default ButtonSend;
