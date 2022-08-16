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

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
      <div className={style.relogioWrapper}>
        <Watch currentTime={currentTime} />
      </div>
      <Button>Começar!</Button>
    </div>
  );
};

export default Stopwatch;
