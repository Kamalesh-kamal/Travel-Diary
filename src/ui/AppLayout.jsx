import { Outlet } from "react-router";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
