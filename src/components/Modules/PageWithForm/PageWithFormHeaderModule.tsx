import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";

type Props = {
  title: string;
  customBg: string;
};

export const PageWithFormHeaderModule = (props: Props) => {
  return (
    <HeaderAtom title={props.title} customBg={props.customBg} />
  );
};
