import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-35 flex justify-center items-center border-t mt-10">
      <p className="text-md text-gray-500">
        © {new Date().getFullYear()} CreateCV. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
