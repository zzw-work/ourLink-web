import React from "react";

import { FooterBanner } from "../Components/index";

import { FooterItemId } from "../Const";

import WorkBenches from "../Workbenches";
import Message from "../Message";

// import "./index.scss";

const showSector = {
  Workbenches: <WorkBenches />,
  Message: <Message />,
};

const Home = () => {
  const [active, setActive] = React.useState<FooterItemId>("Workbenches");
  return (
    <div className="home">
      {/* <Header title={"主题"} /> */}
      {showSector[active]}
      <FooterBanner active={active} setActive={setActive} />
    </div>
  );
};

export default Home;
