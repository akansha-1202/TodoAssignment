import React, { useState} from "react";
import { useLocalStorage } from "./LocalStorage";


const TodoApp = () => {
        const [todos, setTodos] = useLocalStorage("todos", []);
        const [inputValue, setInputValue] = useState("");

        const handleInputChange = (e) => {
            setInputValue(e.target.value);
        };

        const handleKeyPress = (e) => {
            if (e.key === "Enter") {
            createTodo();
            }
        };

        const createTodo = () => {
            if (inputValue.trim() !== "") {
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                completed: false,
            };
            setTodos((prevTodos) => [...prevTodos, newTodo]);
            setInputValue("");
            }
        };

      
        const markTodoComplete = (id) => {
            const updatedTodos = todos.map((todo) => {
              if (todo.id === id) {
                return { ...todo, completed: true };
              }
              return todo;
            });
          
            // Reorder the completed todos to add the most recent one at the beginning
            const updatedCompletedTodos = [
              ...updatedTodos.filter((todo) => todo.completed).reverse(),
              ...updatedTodos.filter((todo) => !todo.completed)
            ];
          
            setTodos(updatedCompletedTodos);
            localStorage.setItem("todos", JSON.stringify(updatedCompletedTodos));
          };
          

        const resetTodos = () => {
            setTodos([]);
            localStorage.removeItem("todos");
        };

        const activeTodos = todos.filter((todo) => !todo.completed).reverse();
        const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div>
      <header>
          <div>
              <h1>TODO APP</h1>
          </div>
          <button onClick={resetTodos} id="resetBtn">Reset</button>
      </header>

      <div id="main-body">
            <div id="input-box">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    // onClick={handleKeyPress}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter a todo..."
                />
                <button onClick={createTodo} id="addBtn">Add Todo</button>
            </div>

           <div id="output-box">
                <div>
                    <h2>Active Todos</h2>
                    {activeTodos.map((todo) => (
                    <div key={todo.id} onClick={() => markTodoComplete(todo.id)}>
                       <p> {todo.text}</p>
                    </div>
                    ))}
                </div>

                <div>
                    <h2>Completed Todos</h2>
                    {completedTodos.map((todo) => (
                        <div key={todo.id}>
                             <p> {todo.text}</p>
                        </div>
                    ))}
                </div>
            </div>
      </div>
     
    </div>
  );
};

export default TodoApp;
