import { Outlet } from "react-router";
import Footer from "../components/Footer";

function InnerLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default InnerLayout
