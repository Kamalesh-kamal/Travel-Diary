import { Outlet } from "react-router";
import { ModalProvider } from "../context/ModalContext";

function AppLayout() {
  return (
    <ModalProvider>
      <Outlet />
    </ModalProvider>
  );
}

export default AppLayout;
