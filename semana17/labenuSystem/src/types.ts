export type student = {
    id: number,
    name: string,
    email: string,
    birthDate: string
};

export type hobby = {
    id: number,
    description: string
}

export type dependencies = {
    student_id: number,
    hobbies_id: number
}