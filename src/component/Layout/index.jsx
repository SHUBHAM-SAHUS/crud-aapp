import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <Sidebar/>
      <div className="main_content" >
      {children}
      </div>
    </>
  );
};

export default Layout;
