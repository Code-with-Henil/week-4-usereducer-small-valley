export type TaskType = {
    id: number;
    task: string;
    isComplete: boolean;
};

let tasks: Array<TaskType> = [
    {
        id: 1,
        task: "Learn Angular.js",
        isComplete: false,
    },
    {
        id: 2,
        task: "Learn React.js",
        isComplete: true,
    },
];

export const getTasks = async () => {
    setTimeout(() => {}, 500);
    return tasks;
};

export const addTask = async (newTask: TaskType) => {
    setTimeout(() => {}, 500);
    tasks.push(newTask);
};

export const updateTask = async (task: TaskType) => {
    await deleteTask(task.id);
    tasks.push(task);
};

export const deleteTask = async (id: number) => {
    setTimeout(() => {}, 500);
    tasks.splice(
        tasks.findIndex((t) => t.id === id),
        1
    );
};
