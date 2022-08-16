import React, { Component, ReactNode } from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  text?: string;
  children?: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}
class Button extends Component<ButtonProps> {
  render(): React.ReactNode {
    const { type = "button" } = this.props;
    return (
      <button type={type} className={style.Button} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
