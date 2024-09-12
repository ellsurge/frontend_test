import Image from "next/image";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import eth from "../../../../public/svgs/eth.png"
import nvir from "../../../../public/svgs/nvir.png"
import loader from "../../../../public/svgs/transactionLoader.png"
import Modal from "~/components/Atoms/Modal/Modal";
import { useState } from "react";

export const HomeDescriptionModule = () => {
  const [open, setOpen] = useState(false)
  const Message = [
    { profileImg: eth, reciever: 'ETH', message: 'my name is stephen and i work at namu labs', time: '08:43 PM' },
    { profileImg: nvir, reciever: 'Nvir', message: 'namulabs is a fantastic company', time: '08:43 PM', visibility: 'hidden' },
    // { reciever: 'ETH', message: 'my name is stephen and i work at namu labs', time: '08:43 PM' },
    // { reciever: 'ETH', message: 'my name is stephen and i work at namu labs', time: '08:43 PM' },
  ]
  return (
    <div className="flex flex-col h-full">
      <div className="text-white px-[18px] pt-2">
        <h1 className="text-[30px] font-[600] leading-[33px]">Messages</h1>
        <div className="mt-4">
          <SVGAtom iconName="proxima" className="mb-1 h-[65px] cursor-pointer" onClick={() => { setOpen(true) }} />
          <p className="ml-1 text-[16px] font-[400]">Proxima</p>
        </div>
      </div>
      <div className="w-full bg-[#2C2D30] h-[70%] mt-5 p-3 px-4 text-white rounded-tl-[25px] rounded-tr-[25px] overflow-scroll">
        <ul className="w-[90%] grid place-items-center">
          {Message.map((chat, i) => (
            <li key={i} className="w-full flex items-center justify-center my-4 ml-5">
              <Image alt="" src={chat.profileImg} className="w-[55px] mr-3" />

              <div className="w-[85%]">
                <div className="w-full flex justify-between items-center">
                  <p className="text-[18px] font-[500]">{chat.reciever}</p>
                  <p className="text-[15px] font-[300]">{chat.time}</p>
                </div>

                <div className="text-[#bfbfbf] text-[16px] font-[450] flex items-center gap-2 relative mt-1">
                  User: {chat.message.substring(0, 39)}...
                  <span className={`w-[16px] h-[16px] flex items-center justify-center mr-[-50px] text-[12px] font-[600] bg-[#FF4D4F] rounded-full absolute right-[10%] ${chat.visibility}`}>
                    1
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <Modal isModalOpen={open} setModalOpen={() => { setOpen(false) }} containerClassName="w-[70%] h-[70%] bg-[#2C2D30] text-white grid place-items-center">
          <h1 className="text-[22px] font-[500]">Transaction <br /> Processing</h1>

          <Image alt="" src={loader} className="" />

          <div className="text-[14px] font-extralight">
            <p>Uploading your transaction to the node</p>
            <p>please wait for a moment...</p>
            <p>This may take up to 2 minutes.</p>
          </div>
        </Modal>
      </div>
    </div>
  );
};
