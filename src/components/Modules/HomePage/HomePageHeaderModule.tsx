import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";

type Props = {
  headerProps: React.ComponentProps<typeof HeaderAtom>;
};

export const HomePageHeaderModule = (props: Props) => {
  return <HeaderAtom {...props.headerProps} />;
};