import { Button, Divider, Input } from "@chakra-ui/react";
import Task from "./Task";
import { TaskType } from "../data/mockApi";
import { useReducer, useRef } from "react";

interface ActionType {
    type: string;
    payload: TaskType;
}

const taskReducer = (state: TaskType[], action: ActionType): TaskType[] => {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "update":
            const updatedTasks = state.map((task) =>
                task.id === action.payload.id ? action.payload : task
            );
            return updatedTasks;
        case "delete":
            return state.filter((task) => task.id !== action.payload.id);
        default:
            return state;
    }
};

const TaskList: React.FC<{ isCompleted: boolean }> = ({ isCompleted }) => {
    const initialState: TaskType[] = [];
    const [tasks, dispatch] = useReducer(taskReducer, initialState);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleAddTask = () => {
        if (inputRef.current) {
            const id = tasks.length === 0 ? 1 : tasks[tasks.length - 1]?.id + 1;
            const description = inputRef.current?.value;
            const newTask: TaskType = {
                id: id,
                task: `${id}: ${description}`,
                isComplete: false,
            };

            dispatch({ type: "add", payload: newTask });
            inputRef.current.value = "";
        }
    };

    return (
        <>
            <div
                style={{
                    margin: "1rem",
                }}
            >
                <div
                    style={{
                        display: "flex",
                    }}
                >
                    <Button onClick={handleAddTask}>Add Task</Button>
                    <Input ref={inputRef} placeholder="Description" />
                </div>
                <p
                    style={{
                        margin: "1rem 0",
                    }}
                >
                    Working on Task
                </p>
                <div
                    style={{
                        display: "flex",
                        overflowX: "auto",
                        whiteSpace: "nowrap",
                        minHeight: "14rem",
                        paddingBottom: "2rem",
                    }}
                >
                    {tasks
                        .filter((task) => task.isComplete === false)
                        .map((task, i) => (
                            <Task
                                key={i}
                                id={task.id}
                                title=""
                                description={task.task}
                                isCompleted={task.isComplete}
                                dispatch={dispatch}
                            />
                        ))}
                </div>
                <Divider />
                <p
                    style={{
                        margin: "1rem 0",
                    }}
                >
                    Completed Task
                </p>
                <div
                    style={{
                        display: "flex",
                        overflowX: "auto",
                        whiteSpace: "nowrap",
                    }}
                >
                    {tasks
                        .filter((task) => task.isComplete === true)
                        .map((task, i) => (
                            <Task
                                key={i}
                                id={task.id}
                                title=""
                                description={task.task}
                                isCompleted={task.isComplete}
                                dispatch={dispatch}
                            />
                        ))}
                </div>
            </div>
        </>
    );
};

export default TaskList;
