import React, { useState } from "react";
import "./index.css";

type Todo = {
  title: string;
  isCompleted: boolean;
  index:number
};

type TodoListProps = {
  listTodos: Todo[];
  CompltedTodo: (id: number) => void;
  EditTodo:(index: number) => void;
  deleteTodo:(index: number) => void;
};

const index = ({ listTodos, CompltedTodo,EditTodo, deleteTodo}: TodoListProps) => {
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [editTitle, setEditTitle] = useState<string>("");

    const handleEditStart = (index: number, title: string) => {
        setEditIndex(index);
        setEditTitle(title);
      };
    
      // const handleEditCancel = () => {
      //   setEditIndex(null);
      //   setEditTitle("");
      // };
    
      // const handleEditSave = (index: number, newTitle: string) => {
      //   EditTodo(index);
      //   setEditIndex(null);
      //   setEditTitle("");
      // };
      

  return (
    <>
      <ul className="container">
      {listTodos.map((todo, index) => (
        <li key={index} className={todo.isCompleted ? "completed" : ""}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              {/* <button onClick={() => handleEditSave(index,editTitle)}>Save</button>
              <button onClick={handleEditCancel}>Cancel</button> */}
            </>
          ) : (
            <>
              {todo.isCompleted ? <del>{todo.title}</del> : todo.title}
              <div className="button-todo">
                <button onClick={() => CompltedTodo(index)}>Complete</button>
                {/* <button onClick={() => handleEditStart(index, todo.title)}>Edit</button> */}
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
    </>
  );
};
export default index;
