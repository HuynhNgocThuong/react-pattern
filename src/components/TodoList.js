import React, { useState } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Input from "./Input";
import Button from "./Button";

function InputRow(props) {
  const [input, setInput] = useState("");
  const { addTodoItem } = props;
  function addTodo() {
    addTodoItem(input);
    setInput("");
  }
  return (
    <form>
      <Input value={input} onChange={(e) => setInput(e.target.value)}></Input>
      <Button onClick={addTodo} color="primary" variant="outlined">
        Add Item
      </Button>
    </form>
  );
}

export function TodoList() {
  const [todos, setTodos] = useState(["Improve JS skills 💪", "Pet dog 🐶"]);
  function addTodoItem(todo) {
    todo.length && setTodos([...todos, todo]);
  }
  function removeTodoItem(index) {
    todos.splice(index, 1);
    setTodos([...todos]);
  }
  return (
    <div class="todo-list">
      <h1>Todo Items</h1>
      <InputRow addTodoItem={addTodoItem}></InputRow>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={`${todo}-${index}`}>
            <ListItemText>{todo}</ListItemText>
            <Button color="secondary" onClick={() => removeTodoItem(index)}>
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
