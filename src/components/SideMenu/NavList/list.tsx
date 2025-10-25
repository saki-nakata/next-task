"use client";

import { FaTasks, FaRegCheckSquare, FaRegClock } from "react-icons/fa";
import NavItem from "./NavItem/item";

interface Props {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

// 配列をコンポーネント外に出すことで、再レンダリング時に再生成されない
const list: Props[] = [
  {
    id: 1,
    label: "全タスク",
    link: "/",
    icon: <FaTasks className="text-xl" />,
  },
  {
    id: 2,
    label: "完了済タスク",
    link: "/closed",
    icon: <FaRegCheckSquare className="text-xl" />,
  },
  {
    id: 3,
    label: "期限切タスク",
    link: "/overdue",
    icon: <FaRegClock className="text-xl" />,
  },
];

const NavList = () => {
  return (
    <div className="mt-24">
      {list.map(item => (
        // {...item} で props をまとめて渡す
        <NavItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default NavList;
