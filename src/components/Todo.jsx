import React from "react";
import { Button } from "react-bootstrap";
import "./Todo.css";

export default function Todo(props) {
    const { complete, children: name, ids } = props;

    return (
        <li className="todo" data-id={ids}>
            <span className={`todo-name ${complete ? "todo-complete" : ""}`}>{name}</span>
            <Button data-delete-btn className="bg-danger todo-btn-delete">
                X
            </Button>
        </li>
    );
}
