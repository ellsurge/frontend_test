import { useState } from "react";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
};

export const FooterAtom = (props: Props) => {
  const [active, setActive] = useState('active')
  const navbar = [
    { iconName: <SVGAtom iconName="dollar" width={50} className="ml-6" />, },
    { iconName: <SVGAtom iconName="history" width={50} className="ml-6" />, },
    { iconName: <SVGAtom iconName="wallet" width={50} className="ml-6" />, activeTab: 'active', },
    { iconName: <SVGAtom iconName="chat" width={50} className="ml-6" />, },
  ]
  return (
    <div className="h-[10%] w-full flex items-center justify-center absolute bottom-0 px-3 bg-[#000] text-white">
      <ul className="h-full w-full flex items-center justify-between">
        {navbar.map((link, i) => (
          <li key={i} className={`h-full border-t-2 ${active === link.activeTab ? 'border-t-[#00EC97]' : 'border-t-transparent'} grid place-items-center`}>
            <div className="mt-4 w-auto">
              {link.iconName}
            </div>

            <p className="hidden">
              {props.title}
            </p>

          </li>
        ))}
      </ul>
    </div>
  );
};
