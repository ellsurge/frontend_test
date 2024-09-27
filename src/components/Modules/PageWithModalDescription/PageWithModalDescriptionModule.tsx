import Image from "next/image";

import ProximaIMG from "@assets/proxima.png";
import EthIMG from "@assets/eth.png";
import NvirIMG from "@assets/nvir.png";
import CountIMG from "@assets/count.png";

export const PageWithModalDescriptionModule = () => {
  return (
    <div className='flex h-full min-h-screen flex-col gap-5 text-white'>
      <div className='p-7'>
        <div className='mb-4 text-[28px] font-bold'>Messages</div>
        <div className='mb-6 flex w-fit flex-col items-center'>
          <Image
            src={ProximaIMG}
            alt='Proxima Alt'
            className='rounded-full'
            width={65}
            height={65}
          />
          <div>
            <p className='text-center text-base'>Proxima</p>
          </div>
        </div>
      </div>

      <div className='flex-grow rounded-tl-[30px] rounded-tr-[30px] bg-[#2C2D30]'>
        <div className='h-full text-base text-gray-200'>
          <div className='flex h-full flex-col'>
            <div className='flex items-center justify-between space-x-4 p-8'>
              <Image
                src={EthIMG}
                alt='Eth Alt'
                className='h-10 w-10 rounded-full object-fill'
                width={44}
                height={44}
              />
              <div className='flex flex-col'>
                <p className='text-base font-bold text-white'>ETH</p>
                <p className='whitespace-nowrap text-sm text-[#BFBFBF]'>
                  User: namulabs is fantasic company...
                </p>
              </div>
              <div className='flex flex-col items-end justify-start'>
                <p className='mt-0 whitespace-nowrap text-sm'>8:43 PM</p>
                <Image
                  src={CountIMG}
                  alt='Icon Alt'
                  className='h-5 w-5'
                  width={20}
                  height={20}
                />
              </div>
            </div>

            <div className='flex items-center justify-between space-x-4 p-8'>
              <Image
                src={NvirIMG}
                alt='Nvir Alt'
                className='h-10 w-10 rounded-full'
                style={{ objectFit: "cover" }}
                width={44}
                height={44}
              />
              <div className='flex flex-col'>
                <p className='text-base font-bold text-white'>Nvir</p>
                <p className='whitespace-nowrap text-sm text-[#BFBFBF]'>
                  User: namulabs is fantasic company...
                </p>
              </div>
              <div className='flex flex-col items-end justify-start'>
                <p className='mt-0 whitespace-nowrap text-sm'>8:42 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
