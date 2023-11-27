import { ChangeEvent, useState } from "react";
import "./App.css";
import { TToDo } from "./assets/apptypes";
import ToDoItem from "./ToDoItem";

function App() {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
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
    const newTask = { task: task, workDay: workDay }; //isimler aynı olduğu için sadece task,workDay olarak da yazabiliriz
    setToDoList([...toDoList, newTask]);
    setTask("");
    setWorkDay(0);
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
          placeholder="Taskınızı giriniz..."
          value={task}
          onChange={handleChange}
          name="task"
        />
        <input
          className="input"
          type="number"
          placeholder="Kaç günde tamamlamalısınız"
          value={workDay}
          onChange={handleChange}
          name="workDay"
        />
        <button className="button" onClick={addNewTask}>
          Yeni Task Ekle
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
