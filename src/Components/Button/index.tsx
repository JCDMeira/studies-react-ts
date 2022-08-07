import React, { Component } from "react";
import style from "./Button.module.scss";

class Button extends Component {
  render(): React.ReactNode {
    return <button className={style.Button}>Botão</button>;
  }
}

export default Button;
