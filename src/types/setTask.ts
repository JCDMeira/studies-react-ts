interface setTaskType {
  setTask: React.Dispatch<
    React.SetStateAction<
      {
        task: string;
        time: string;
      }[]
    >
  >;
}

export default setTaskType;
