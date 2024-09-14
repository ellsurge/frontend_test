import { HeaderAtom } from "~/components/Atoms/UmarHeaderAtom/HeaderAtom";

type Props = {
  headerProps: React.ComponentProps<typeof HeaderAtom>; 
};

export const HomeHeaderModule = (props: Props) => {
  return <HeaderAtom {...props.headerProps} />;
};
