import React from "react";
import Button from "../Button";
import Watch from "./Watch";
import style from "./stopwatch.module.scss";
import { timeToSeconds } from "../../common/utils/date";

const Stopwatch: React.FC = () => {
  console.log("conv: ", timeToSeconds("01:01:01"));
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
      <div className={style.relogioWrapper}>
        <Watch />
      </div>
      <Button>Começar!</Button>
    </div>
  );
};

export default Stopwatch;
