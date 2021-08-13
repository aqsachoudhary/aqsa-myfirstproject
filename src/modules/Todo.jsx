import { useState, useEffect } from "react";
import todo from "../helper/todo";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    setTodoList(todo);
  }, []);

  const onDelete = (id) => {
    const filtertodos = todoList.filter((todoinfo) => todoinfo.id !== id);
    setTodoList(filtertodos);
  };

  return (
    <div>
      <h1>Todos</h1>
      <table>
        <tr>
          <th>userId</th>
          <th>title</th>
          <th>completed</th>
          <th>Button</th>
        </tr>
        <tbody>
          {todoList.map((item) => (
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.completed.toString()}</td>
              <td>
                <button
                  onClick={() => {
                    onDelete(item.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Todo;
