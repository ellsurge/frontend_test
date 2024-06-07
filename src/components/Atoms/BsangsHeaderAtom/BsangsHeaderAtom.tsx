import { SettingOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
  onClickLeftIcon: () => void;
};

export const BsangsHeaderAtom = (props: Props) => {
  return (
    <div className="flex h-full items-center justify-between bg-[#FFC96F]">
      {/* Sample using custom svg */}
      <div
        className="flex h-full w-[50px] cursor-pointer items-center justify-center"
        onClick={props.onClickLeftIcon}
      >
        <SVGAtom iconName="arrowLeft" width={20} height={20} color="#BFBFBF" />
      </div>

      <div>{props.title}</div>

      {/* Sample using Antd icon */}
      <div
        className="flex h-full w-[50px] cursor-pointer items-center justify-center"
        onClick={() => console.log("Antd icon clicked")}
      >
        <SettingOutlined className="!text-gray-header cursor-pointer text-[20px]" />
      </div>
    </div>
  );
};
