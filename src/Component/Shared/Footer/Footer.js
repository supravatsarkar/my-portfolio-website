import React from "react";

const Footer = () => {
  return (
    <div className="mt-4 pb-2 text-light ">
      <p className="mb-0">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
      <p className="my-1">Developed by Supravat Sarkar</p>
    </div>
  );
};

export default Footer;
