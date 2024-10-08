// src/components/atoms/Header.tsx
import { SettingOutlined, SelectOutlined } from "@ant-design/icons";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className='flex items-center justify-between bg-gray-800 p-4'>
      <Link href='/sample/home'>
        <img
          src='/icon.png'
          alt='icon'
          style={{ fontSize: "24px", color: "gray" }}
        />
      </Link>

      <div style={{ fontSize: "14px" }} className='font-white text-lg'>
        Proxima OS
      </div>
      <Link href=''>
        <SettingOutlined style={{ fontSize: "24px", color: "gray" }} />
      </Link>
    </div>
  );
};

export default Header;
