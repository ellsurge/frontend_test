import SVGAtom from "../SVGAtom/SVGAtom";
import { HomeContainer } from "~/app/umar/home/container/HomeContainer";

type Props = {
  title: string;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
};

export const HeaderAtom = (props: Props) => {
  return (
    <div className='relative flex h-full w-full items-center justify-center bg-[#1F1F1F] text-[#FFFFFF]'>
      {props.onClickLeftIcon && (
        <div
          className='absolute left-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
          onClick={props.onClickLeftIcon}
        >
          <SVGAtom iconName='atom' width={18.93} height={20} color='#BFBFBF' />
        </div>
      )}

      <div>{props.title}</div>

      <div
        className='absolute right-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
        onClick={props.onClickRightIcon}
      >
        <SVGAtom iconName='setting' width={18.93} height={20} color='#BFBFBF' />
      </div>
    </div>
  );
};
