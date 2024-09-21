import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
};

export const MessageAtom = (props: Props) => {
  return (
        <main className="h-[90vh] bg-black py-4 px-8 w-full flex flex-col gap-8">
                <h1 className="text-white text-4xl font-bold">{props.title}</h1>
                <div className="flex flex-col gap-2">
                <SVGAtom
                iconName="star"
                height={65}
                />
                <p className="text-white text-base">Proxima</p>
                </div>
        </main>
  );
};
