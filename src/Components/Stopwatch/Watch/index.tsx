import React from "react";
import style from "./watch.module.scss";

interface WatchProp {
  currentTime: number | undefined;
}

const Watch: React.FC<WatchProp> = ({ currentTime = 0 }) => {
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;

  const [dozenMinutes, unitMinutes] = String(minutes).padStart(2, "0");
  const [dozenSeconds, unitSeconds] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.relogioNumero}>{dozenMinutes}</span>
      <span className={style.relogioNumero}>{unitMinutes}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{dozenSeconds}</span>
      <span className={style.relogioNumero}>{unitSeconds}</span>
    </>
  );
};

export default Watch;
