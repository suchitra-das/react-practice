import Navbar from "../componets/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default Layout;
