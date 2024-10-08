import {
  DollarCircleFilled,
  MessageFilled,
  WalletFilled,
  HistoryOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";

const Footer: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState("home"); // Set default active icon (home)

  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName); // Update the active icon when clicked
  };

  // Calculate the left position for the green line based on the active icon
  const getLinePosition = () => {
    switch (activeIcon) {
      case "home":
        return "translate-x-0"; // Centered for home
      case "messages":
        return "translate-x-[110px]"; // Adjust based on icon width and spacing
      case "wallet":
        return "translate-x-[225px]"; // Adjust based on icon width and spacing
      case "history":
        return "translate-x-[350px]"; // Adjust based on icon width and spacing
      default:
        return "translate-x-0"; // Default position
    }
  };

  return (
    <div className='relative bg-gray-800 p-4'>
      {/* Green Line at the Top of Footer */}
      <div
        className={`absolute top-0 h-1 w-1/4 bg-green-500 transition-all duration-300 ease-in-out ${getLinePosition()}`}
      ></div>

      {/* Footer Section */}
      <div className='flex items-center justify-around'>
        {/* Dollar Circle Icon */}
        <div className='flex flex-col items-center'>
          <Link href='/sample/home' onClick={() => handleIconClick("home")}>
            <DollarCircleFilled
              className='text-gray-400'
              style={{ fontSize: "24px" }}
            />
          </Link>
        </div>

        {/* Message Icon */}
        <div className='flex flex-col items-center'>
          <Link href='/sample/home' onClick={() => handleIconClick("messages")}>
            <MessageFilled
              className='text-gray-400'
              style={{ fontSize: "24px" }}
            />
          </Link>
        </div>

        {/* Wallet Icon */}
        <div className='flex flex-col items-center'>
          <Link href='/sample/home' onClick={() => handleIconClick("wallet")}>
            <WalletFilled
              className='text-gray-400'
              style={{ fontSize: "24px" }}
            />
          </Link>
        </div>

        {/* History Icon */}
        <div className='flex flex-col items-center'>
          <Link href='/sample/home' onClick={() => handleIconClick("history")}>
            <HistoryOutlined
              className='text-gray-400'
              style={{ fontSize: "24px" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
