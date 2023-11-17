import TaskList from "./components/TaskList";
import CreateTaskModal from "./components/common/Modal";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
    return (
        <>
            <ModalProvider>
                {/* <CreateTaskModal /> */}
                {/* <ModalComponent /> */}
                {/* <p>Working on Task</p> */}
                <TaskList isCompleted={false} />
                {/* <Divider />
                <p>Completed Task</p>
                <TaskList isCompleted={true} /> */}
            </ModalProvider>
        </>
    );
}

export default App;
