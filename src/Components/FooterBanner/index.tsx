import React from "react";

import { FooterArr, FooterItem } from "../../Const";
import "./index.scss";

const FooterBanner = (props: {
  setActive: (arg0: string) => void;
  active: string;
}) => {
  const BannerClick = (id: string) => {
    props.setActive(id);
  };
  return (
    <div className="footerBanner">
      {FooterArr.map((item: FooterItem) => {
        return (
          <div
            key={item.id}
            className={
              props.active === item.id
                ? "footerBannerItemNameActive"
                : "footerBannerItem"
            }
            onClick={() => {
              BannerClick(item.id);
            }}
          >
            <div className="footerBannerItemIcon"> {item.icon ?? "1"}</div>
            <div className="footerBannerItemName">{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FooterBanner;
