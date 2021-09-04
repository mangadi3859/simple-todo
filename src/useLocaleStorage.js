import { useState, useEffect } from "react";
const PREFIX = "isla.todos-";

export default function useLocaleStorage(key, value) {
    const [state, setState] = useState(() => load(key, value));

    useEffect(() => {
        if (!state) return;
        save(key, state);
    }, [state]);

    return [state, setState];
}

function load(key, value) {
    const data = localStorage.getItem(PREFIX + key);
    if (data) return JSON.parse(data);

    if (value instanceof Function) return value();
    return value;
}

function save(key, value) {
    return localStorage.setItem(PREFIX + key, JSON.stringify(value));
}
