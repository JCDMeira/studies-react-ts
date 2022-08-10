import React, { Component, ReactNode } from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  text?: string;
  children?: ReactNode;
}
class Button extends Component<ButtonProps> {
  render(): React.ReactNode {
    const { children } = this.props;
    return <button className={style.Button}>{children}</button>;
  }
}

export default Button;
