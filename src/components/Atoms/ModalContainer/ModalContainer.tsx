import cn from "classnames";
import { type PropsWithChildren } from "react";

type Props = {
  style?: React.CSSProperties;
  className?: string;
};

export const ModalContainer = (props: PropsWithChildren<Props>) => {
  return (
    <div
      className={cn(
        "relative left-1/2 top-1/2 z-[1] h-fit w-[45%] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-[14px] bg-[#2C2D30] shadow-lg ",
        props.className
      )}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
