/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function useModalContext() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const value = {
    modalData,
    setModalData,
    showModal,
    setShowModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
