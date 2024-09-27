import { SettingOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
};

export const DanielHeaderAtom = (props: Props) => {
  return (
    <div className='relative flex h-full w-full items-center justify-center bg-[#1F1F1F]'>
      {/* Sample using custom svg */}
      {props.onClickLeftIcon && (
        <div
          className='absolute left-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center text-[#BFBFBF]'
          onClick={props.onClickLeftIcon}
        >
          <SVGAtom iconName='cast' width={20} height={20} />
        </div>
      )}

      <div className='text-base font-semibold text-white'>{props.title}</div>

      {/* Sample using Antd icon */}
      {props.onClickRightIcon && (
        <div
          className='absolute right-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center text-[#BFBFBF]'
          onClick={() => console.log("Antd icon clicked")}
        >
          <SettingOutlined className='cursor-pointer text-[20px]' />
        </div>
      )}
    </div>
  );
};