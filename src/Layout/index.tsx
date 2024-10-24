import React, { useEffect, useContext } from "react";

import { FooterBanner } from "../Components";
import { Outlet, useNavigate } from "react-router";

const Layout = () => {
  const [active, setActive] = React.useState(1);
  const navigate = useNavigate();

  return (
    <div className="home">
      <Outlet></Outlet>
      <FooterBanner active={active} setActive={setActive} />
    </div>
  );
};

export default Layout;
