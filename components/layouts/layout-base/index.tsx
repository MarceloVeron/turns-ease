import React from "react";
import Footer from "../../footer";

const LayoutBase = ({ children }) => {
  return (
    <>
      <div>nav</div>
      {children}
      <Footer/>
    </>
  );
};

export default LayoutBase;
