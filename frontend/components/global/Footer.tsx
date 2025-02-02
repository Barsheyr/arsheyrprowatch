import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-10 text-center">
      <p className="text-sm">
        &copy; {currentYear} WatchPro Store. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
