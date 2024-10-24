import React from "react";

import { FooterArr, FooterItem } from "../../Const";
import "./index.scss";
import { Link, useLocation } from "react-router-dom";

const FooterBanner = () => {
  const location = useLocation();
  return (
    <div className="footerBanner">
      {FooterArr.map((item: FooterItem) => {
        return (
          <div
            key={item.id}
            className={
              location.pathname === item.id
                ? "footerBannerItemNameActive"
                : "footerBannerItem"
            }
          >
            <Link to={item.id} style={{ textDecoration: "none" }}>
              <div className="footerBannerItemIcon"> {item.icon ?? "1"}</div>
              <div className="footerBannerItemName">{item.name}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default FooterBanner;
