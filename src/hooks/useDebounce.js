import { useEffect, useState } from "react";

const useDebounce = (inputValue, delay) => {

    const [debounceValue, setDebounceValue] = useState(inputValue);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceValue(inputValue)
        }, delay)

        return () => {
            clearTimeout(timerId)
        }
        
    }, [inputValue, delay]);

    return debounceValue;
    
}

export default useDebounce;