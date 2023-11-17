import React, { createContext, useContext, ReactNode, useState } from "react";

interface ModalContextProps {
    children: ReactNode;
}

interface ModalState {
    isOpen: boolean;
    // other properties...
}

interface ModalContextType {
    modalState: ModalState;
    openModal: () => void;
    closeModal: () => void;
    afterEffect: (callback?: () => void) => void;
}

let callbackFunction = () => {};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<ModalContextProps> = ({ children }) => {
    const [modalState, setModalState] = useState<ModalState>({
        isOpen: false,
        // other default values...
    });

    const openModal = () => {
        // update modal state to open
        setModalState((prevState) => ({ ...prevState, isOpen: true }));
    };

    const closeModal = () => {
        // update modal state to close
        setModalState((prevState) => ({ ...prevState, isOpen: false }));
    };

    const afterEffect = (callback?: () => void) => {
        console.log(callback, callbackFunction);
        if (callback) {
            callbackFunction = callback;
        } else {
            callbackFunction();
        }
    };

    const contextValue: ModalContextType = {
        modalState,
        openModal,
        closeModal,
        afterEffect,
    };

    return (
        <ModalContext.Provider value={contextValue}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};
