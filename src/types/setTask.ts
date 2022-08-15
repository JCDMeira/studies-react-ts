interface setTaskType {
  setTasks: React.Dispatch<
    React.SetStateAction<
      {
        task: string;
        time: string;
        selected: boolean;
        completed: boolean;
        id: string;
      }[]
    >
  >;
}

export default setTaskType;
