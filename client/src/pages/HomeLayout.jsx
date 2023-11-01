import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <h5>navbar</h5>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
