import { useState } from "react";
import FormComponent from "./componets/FormComponent";
import ListTodo from "./componets/ListTodo";
import Navbar from "./componets/Navbar";

function App() {
  const [listTodos, setListTodos] = useState<
    { title: string; isCompleted: boolean; index: number }[]
  >([]);

  const addTodo = (newTodo: { title: string; isCompleted: boolean }) => {
    const newIndex = listTodos.length;
    setListTodos([...listTodos, { ...newTodo, index: newIndex }]);
  };

  const CompltedTodo = (index: number) => {
    const newTodo = [...listTodos];
    newTodo[index].isCompleted = !newTodo[index].isCompleted;
    setListTodos(newTodo);
  };

  const deleteTodo = (index: number) => {
    const newTodo = listTodos.filter((_todo, i) => i !== index);
    setListTodos(newTodo);
  };


  return (
    <div>
      <Navbar />
      <FormComponent addTodo={addTodo} />
      <ListTodo
        listTodos={listTodos}
        CompltedTodo={CompltedTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
