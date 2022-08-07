import React, { Component } from "react";
import Button from "../Button";

class Form extends Component {
  render(): React.ReactNode {
    return (
      <form action="#">
        <div>
          <label htmlFor="task">Adicione um novo estudo</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="o que você quer estudar?"
            required
          />
        </div>
        <div>
          <label htmlFor="time"></label>
          <input
            type="time"
            step="1"
            name="time"
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <div>
          <Button />
        </div>
      </form>
    );
  }
}

export default Form;
