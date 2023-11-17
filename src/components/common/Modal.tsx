import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";
import { useModal } from "../../contexts/ModalContext";

const CreateTaskModal = () => {
    const { modalState, openModal, closeModal, afterEffect } = useModal();

    const handleCreateTask = () => {
        afterEffect();
        closeModal(); // Call closeModal without a callback
    };

    return (
        <>
            <Button onClick={() => openModal()}>Open Modal</Button>

            <Modal isOpen={modalState.isOpen} onClose={() => closeModal()}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* Modal content goes here */}
                        <Button onClick={handleCreateTask}>Create Task</Button>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateTaskModal;
