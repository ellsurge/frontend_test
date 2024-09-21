import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
};

export const HeaderAtom = (props: Props) => {
  return (
      <header className='flex h-10 w-full justify-between bg-black px-8 py-4'>
        <SVGAtom width={20} height={20} iconName='icon' />
        <h1 className='whitespace-nowrap text-base text-white '>{props.title}</h1>
        <SVGAtom width={20}height={20} iconName='setting' />
      </header>
  );
};
