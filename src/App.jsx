import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React from "react";
import FormList from "./components/FormList";
import Todo from "./components/Todo";
import useLocaleStorage from "./useLocaleStorage";

function App() {
    const [todos, setTodos] = useLocaleStorage("list", []);

    function handleTodo(e) {
        if (e.target.tagName === "UL") return;

        e.parent = e.target.tagName === "LI" ? e.target : e.target.parentElement;
        console.log(e.target);
        console.log(e.parent);
        if (e.target.hasAttribute("data-delete-btn")) return deleteTodo(e);
        let todo = todos.find((todo) => todo.id === parseInt(e.parent.getAttribute("data-id")));
        todo.complete = !todo.complete;
        setTodos(todos.map((element) => (element.id === todo.id ? todo : element)));
    }

    function handleNewTodo(e) {
        e.preventDefault();
        if (!e.state?.text?.trim()) return;
        setTodos([...todos, { name: e.state.text, complete: false, id: Date.now() }]);
        e.state.setText("");
    }

    function deleteTodo(e) {
        let prompt = window.confirm(`Are you sure want to delete this todo?`);
        if (prompt) return setTodos(todos.filter((todo) => todo.id !== parseInt(e.parent.getAttribute("data-id"))));
    }

    function handleClear() {
        let prompt = window.confirm(`Are you sure you want to clear this list?\nAll the list will be deleted.`);
        if (prompt) setTodos([]);
    }

    return (
        <>
            <div className="App">
                <h3 className="title">Todo</h3>
                <hr />
                <ul className="list-container m-0 p-0" onClick={handleTodo}>
                    {todos.map((todo) => (
                        <Todo complete={todo.complete} key={todo.id} ids={todo.id}>
                            {todo.name}
                        </Todo>
                    ))}
                </ul>
            </div>
            <FormList onSubmit={handleNewTodo} onClear={handleClear} />
        </>
    );
}

export default App;
