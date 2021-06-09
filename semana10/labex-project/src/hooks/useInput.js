import { useState } from 'react';

const useInput = (initialState) => {
    const [value, setValue] = useState(initialState);

    const handleValue = (event) => {
        setValue(event.target.value);
    };

    return [value, handleValue];
};

export default useInput;