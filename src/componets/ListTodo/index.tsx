import "./index.css";

type Todo = {
  title: string;
  isCompleted: boolean;
  index: number;
};

type TodoListProps = {
  listTodos: Todo[];
  CompltedTodo: (id: number) => void;
  deleteTodo: (index: number) => void;
};

const index = ({ listTodos, CompltedTodo, deleteTodo }: TodoListProps) => {
  return (
    <>
      <ul className="container">
        {listTodos.map((todo, index) => (
          <li key={index} className={todo.isCompleted ? "completed" : ""}>
            <>
              {todo.isCompleted ? <del>{todo.title}</del> : todo.title}
              <div className="button-todo">
                <button onClick={() => CompltedTodo(index)}>Complete</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </div>
            </>
          </li>
        ))}
      </ul>
    </>
  );
};

export default index;
