import React, { useLocation } from "react";

import { FooterBanner } from "../Components";
import { Outlet, useNavigate } from "react-router";

const Layout = () => {
  return (
    <div className="home">
      <Outlet></Outlet>
      <FooterBanner />
    </div>
  );
};

export default Layout;
