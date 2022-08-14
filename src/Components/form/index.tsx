import React, { Component } from "react";
import Button from "../Button";
import style from "./Form.module.scss";
import setTaskType from "../../types/setTask";
class Form extends Component<setTaskType> {
  state = {
    task: "",
    time: "00:00",
  };

  addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.setTask((oldTasks) => [...oldTasks, { ...this.state }]);
    this.setState({
      task: "",
      time: "00:00",
    });
  };

  render(): React.ReactNode {
    return (
      <form className={style.newTask} onSubmit={this.addTask}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.task}
            onChange={(e) =>
              this.setState({ ...this.state, task: e.target.value })
            }
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.time}
            onChange={(e) =>
              this.setState({ ...this.state, time: e.target.value })
            }
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button type="submit">Adicionar</Button>
      </form>
    );
  }
}

export default Form;
