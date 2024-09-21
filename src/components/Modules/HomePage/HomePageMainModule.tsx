import { MessageAtom } from "~/components/Atoms/MainContentAtom/MessageAtom";

type Props = {
    messageProps: React.ComponentProps<typeof MessageAtom>;
};

export const HomePageMainModule = (props: Props) => {
  return <MessageAtom {...props.messageProps} />;
};