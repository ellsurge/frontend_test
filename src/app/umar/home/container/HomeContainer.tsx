import { message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HomeTemplate } from "~/components/Templates/UmarHome/HomeTemplate"; 


export const HomeContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const handleLeftIconClick = () => {
    void message.info("can't go to Atom");

  };

  const handleRightIconClick = () => {
    setIsModalOpen(true); 
  };

  const homeTemplateProps = {
    homeHeaderModuleProps: {
      headerProps: {
        title: "Proxima OS",
        onClickLeftIcon: handleLeftIconClick,
        onClickRightIcon: handleRightIconClick,
      },
    },


    homeFooterModuleProps: { title: "Footer Title" },
    transactionModalProps: {
      isModalOpen: isModalOpen,
      setModalOpen: setIsModalOpen,
    },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};

