import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
    const [value, setValue] = useState(() => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue || initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue];
}