export type FooterItemId =
  | "/Workbenches"
  | "/Message"
  | "/AddressBox"
  | "/Do"
  | "/MailBox";

export interface FooterItem {
  name: string;
  icon?: any;
  id: FooterItemId;
}

export const FooterArr: FooterItem[] = [
  {
    name: "工作台",
    id: "/Workbenches",
  },
  {
    name: "消息",
    id: "/Message",
  },
  {
    name: "通讯录",
    id: "/AddressBox",
  },
  {
    name: "待办",
    id: "/Do",
  },
  {
    name: "邮箱",
    id: "/MailBox",
  },
];
