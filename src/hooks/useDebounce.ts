import { useState, useEffect } from "react";

/* Devuelve un valor que se actualiza solo después de un delay */
export default function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler); // limpia timeout si value cambia antes
    }, [value, delay]);

    return debouncedValue;
}
