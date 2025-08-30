import { useState, useEffect } from "react";

/**
 * Devuelve true si la carga tarda más del delay especificado.
 * @param isLoading estado de carga
 * @param delay tiempo en ms antes de mostrar el mensaje
 */
export default function useDelayedLoading(isLoading: boolean, delay = 500) {
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            const timer = setTimeout(() => setShowLoading(true), delay);
            return () => clearTimeout(timer);
        } else {
            setShowLoading(false);
        }
    }, [isLoading, delay]);

    return showLoading;
}
