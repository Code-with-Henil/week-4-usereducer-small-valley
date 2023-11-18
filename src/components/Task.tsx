import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Button,
} from "@chakra-ui/react";
import { TaskType } from "../data/mockApi";

const Task = ({
    id,
    title,
    description,
    isCompleted,
    dispatch,
}: {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
    dispatch: ({ type, payload }: { type: string; payload: TaskType }) => void;
}) => {
    return (
        <Card
            style={{
                minWidth: "200px",
            }}
        >
            <CardHeader>
                <Heading size="md">{title}</Heading>
            </CardHeader>
            <CardBody>
                <Text>{description}</Text>
            </CardBody>
            <CardFooter
                style={{
                    display: "flex",
                    gap: "1rem",
                }}
            >
                <Button
                    hidden={isCompleted}
                    onClick={() =>
                        dispatch({
                            type: "update",
                            payload: {
                                id: id,
                                task: description,
                                isComplete: true,
                            },
                        })
                    }
                >
                    Done
                </Button>
                <Button
                    hidden={!isCompleted}
                    onClick={() =>
                        dispatch({
                            type: "update",
                            payload: {
                                id: id,
                                task: description,
                                isComplete: false,
                            },
                        })
                    }
                >
                    UnDone
                </Button>
                <Button
                    onClick={() =>
                        dispatch({
                            type: "delete",
                            payload: {
                                id: id,
                                task: description,
                                isComplete: true,
                            },
                        })
                    }
                >
                    Delete
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Task;
