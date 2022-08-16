import React, { useEffect, useState } from "react";
import Button from "../Button";
import Watch from "./Watch";
import style from "./stopwatch.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import taskType from "../../types/tasks";

interface StopwatchProps {
  selected: taskType | undefined;
}

const Stopwatch: React.FC<StopwatchProps> = ({ selected }) => {
  const [currentTime, setCurrentTime] = useState<number>();
  useEffect(() => {
    if (selected?.time) {
      setCurrentTime(timeToSeconds(selected.time));
    }
  }, [selected?.time]);

  const stopwatchCouter = (time: number = 0) => {
    setTimeout(() => {
      if (time > 0) {
        setCurrentTime(time - 1);
        return stopwatchCouter(time - 1);
      }
    }, 1000);
  };

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
      <div className={style.relogioWrapper}>
        <Watch currentTime={currentTime} />
      </div>
      <Button onClick={() => stopwatchCouter(currentTime)}>Começar!</Button>
    </div>
  );
};

export default Stopwatch;
