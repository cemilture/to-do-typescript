import { TToDo } from "./assets/apptypes";

type TProps = {
  task: TToDo;
  deleteTask(deleteByName: string): void;
};

function ToDoItem({ task, deleteTask }: TProps) {
  return (
    <div>
      <div className="cards">
        <p>{task.task}</p>
        <p>{task.workDay}</p>
        <button className="button" onClick={() => deleteTask(task.task)}>
          Sil
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
