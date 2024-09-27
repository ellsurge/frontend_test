import Image from "next/image";

import ProximaIMG from "@assets/proxima.png";
import EthIMG from "@assets/eth.png";
import NvirIMG from "@assets/nvir.png";

export const PageWithModalDescriptionModule = () => {
  return (
    <div className="flex flex-col gap-5 text-white h-screen">
      <div className="text-2xl font-bold mb-4">Messages</div>
      <div className="flex flex-col mb-6">
        <Image
          src={ProximaIMG}
          alt="Proxima Alt"
          className="rounded-full mr-4"
          width={65}
          height={65}
        />
        <div>
          <p className="text-lg">Proxima</p>
        </div>
      </div>
      <div className="bg-gray-800 rounded-tl-xl rounded-tr-xl flex-1">
        <div className="text-base text-gray-200 h-full">
          {/* Add your additional content here */}
          This section fills the rest of the page without padding.
        </div>
      </div>
    </div>
  );
};
