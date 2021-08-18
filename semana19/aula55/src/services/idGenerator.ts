import { v4 } from 'uuid';

const idGenerator = (): string => {
    const generateId = v4(); 

    return generateId;
};

export default idGenerator;