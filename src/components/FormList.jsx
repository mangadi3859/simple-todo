import React, { useState } from "react";
import { Form, FormLabel, Button } from "react-bootstrap";
import "./FormList.css";

export default function FormList({ onSubmit, onClear }) {
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.state = { text, setText };
        onSubmit(e);
    }

    return (
        <>
            <Form className="form-list" action="" onSubmit={handleSubmit}>
                <FormLabel htmlFor="add-input" className="form-label">
                    +
                </FormLabel>
                <input type="text" className="input-field" id="add-input" value={text} onChange={(e) => setText(e.target.value)} />
                <Button className="btn-submit" type="submit">
                    Add
                </Button>
            </Form>
            <Button className="btn-clear btn-warning" onClick={onClear}>
                Clear
            </Button>
        </>
    );
}
