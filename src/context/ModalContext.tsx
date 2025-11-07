import type { userProps } from "@/types/userProps";
import { createContext, useContext, useState, type ReactNode } from "react";

interface ModalContextType {
  isOpen: boolean;
  userToEdit: userProps | null;
  openModal: (user: userProps) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userToEdit, setUserToEdit] = useState<userProps | null>(null);

  const openModal = (user: userProps) => {
    setUserToEdit(user);
    setIsOpen(true);
  };

  const closeModal = () => {
    setUserToEdit(null);
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, userToEdit, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
