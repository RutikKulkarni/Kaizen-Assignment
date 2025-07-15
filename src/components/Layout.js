import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/bg.jpg')`,
        }}
      />

      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Layout;
