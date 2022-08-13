import React, { Component, ReactNode } from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  text?: string;
  children?: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}
class Button extends Component<ButtonProps> {
  render(): React.ReactNode {
    const { type = "button" } = this.props;
    return (
      <button type={type} className={style.Button}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
