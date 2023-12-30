import { ChangeEvent, useState } from "react";
import "./App.css";
import { TToDo } from "./assets/apptypes";
import ToDoItem from "./ToDoItem";

function App() {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number | string | undefined>(
    undefined
  );
  const [toDoList, setToDoList] = useState<TToDo[]>([]);

  console.log(toDoList);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }
  };

  const addNewTask = (): void => {
    if (!task || !workDay) {
      alert("Please fill out both task and workDay!");
      return;
    }
    const newTask = { task: task, workDay: workDay }; //isimler aynı olduğu için sadece task,workDay olarak da yazabiliriz
    setToDoList([...toDoList, newTask]);
    setTask("");
    setWorkDay("");
  };

  const deleteTask = (deleteByName: string): void => {
    setToDoList(
      toDoList.filter((task) => {
        return task.task !== deleteByName;
      })
    );
  };

  return (
    <>
      <div className="taskMain">
        <input
          className="input"
          type="text"
          placeholder="Enter the task"
          value={task}
          onChange={handleChange}
          name="task"
          required
        />
        <input
          className="input"
          type="number"
          placeholder="How many days to complete"
          value={workDay}
          onChange={handleChange}
          name="workDay"
          required
        />
        <button className="button" onClick={addNewTask}>
          Add New Task
        </button>
      </div>
      <div className="cardsMap">
        {toDoList.map((task: TToDo, index: number) => {
          return <ToDoItem key={index} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </>
  );
}

export default App;
