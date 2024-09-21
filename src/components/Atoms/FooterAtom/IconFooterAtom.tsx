import SVGAtom from "../SVGAtom/SVGAtom";

type IconName = "dollar" | "message" | "wallet" | "history"  ;

type IconProps = {
  iconName: IconName; 
  width: number;
  height: number;
};

const icons: IconProps[] = [
  { iconName: "dollar", width: 20, height: 20 },
  { iconName: "message", width: 20, height: 20 },
  { iconName: "wallet", width: 20, height: 20 },
  { iconName: "history", width: 20, height: 20 },
];

export const IconFooterAtom = (prop: IconProps) => {
  return (
    <footer className='flex h-10 w-full justify-between bg-[#262626] px-8 py-4'>
      {icons.map((icon) => (
        <SVGAtom key={icon.iconName} {...icon} />
      ))}
    </footer>
  );
};
