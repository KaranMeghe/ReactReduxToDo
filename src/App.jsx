import { Provider } from "react-redux";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/ToDoItem";
import store from "./App/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <AddTodo />
        <TodoItem />
      </div>
    </Provider>
  );
}

export default App;
