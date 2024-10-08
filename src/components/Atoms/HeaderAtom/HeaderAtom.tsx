// src/components/atoms/Header.tsx
import { SettingOutlined, SelectOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";
import TransactionProcessing from "../TransactionProcessing";

const Header: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSettingsClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

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
      <SettingOutlined
        onClick={handleSettingsClick}
        style={{ fontSize: "24px", color: "gray", cursor: "pointer" }}
      />

      {/* Render the popup when isPopupOpen is true */}
      {isPopupOpen && <TransactionProcessing onClose={closePopup} />}
    </div>
  );
};

export default Header;
