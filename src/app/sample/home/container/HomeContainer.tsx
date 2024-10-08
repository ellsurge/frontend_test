import Header from "~/components/Atoms/HeaderAtom/HeaderAtom";
import ProximaSection from "~/components/Atoms/ProximaSection";
import UserProfile from "~/components/Atoms/UserProfile";
import Notifications from "~/components/Modules/Notifications/Notifications";
import Footer from "~/components/Atoms/FooterAtom/FooterAtom";
import badge from "../public/badge.png";
import HomeTemplate from "~/components/Templates/Home/HomeTemplate/HomeTemplate";
import { ThunderboltOutlined, BlockOutlined } from "@ant-design/icons";
import TransactionProcessing from "~/components/Atoms/TransactionProcessing";

const notifications = [
  {
    id: 1,
    image: "/Ellipse1(1).png",
    name: "ETH",
    message: "User: Namulabs is fantastic company...",
    time: "08:43 PM",
    status: "unread",
    icon: (
      <img
        src='/badge.png'
        alt='notify'
        style={{ fontSize: "24px", color: "#1890ff" }}
      />
    ),
  },
  {
    id: 2,
    image: "/Ellipse1.png",
    name: "NVIR",
    message: "User: Namulabs is fantastic company...",
    time: "08:42 AM",
    status: "read",
  },
];

const HomePage: React.FC = () => {
  return (
    <div className='flex min-h-screen flex-col justify-between bg-gray-900 text-white'>
      {/* Header */}
      <Header />

      {/* Body */}
      <div className='space-y-6 p-4'>
        {/* User Profile */}
        <UserProfile name='Messages' />

        {/* Proxima Section */}
        <ProximaSection />

        {/* Notifications */}
        <Notifications notifications={notifications} />

        {/* <TransactionProcessing></TransactionProcessing> */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
