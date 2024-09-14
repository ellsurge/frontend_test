import { Layout } from "antd";
import UmarVoteBannerModule from "~/components/Modules/UmarVote/UmarVoteBannerModule";
import UmarVoteFormContentModule from "~/components/Modules/UmarVote/UmarVoteFormContentModule";
import UmarVoteHeaderModule from "~/components/Modules/UmarVote/UmarVoteHeaderModule";

type Props = {
  headerModuleProps: React.ComponentProps<typeof UmarVoteHeaderModule>;
  formContentModuleProps: React.ComponentProps<
    typeof UmarVoteFormContentModule
  >;
};

export const UmarVoteTemplate = (props: Props) => {
  return (
    <Layout
      style={{
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <UmarVoteHeaderModule {...props.headerModuleProps} />
      <UmarVoteBannerModule />
      <UmarVoteFormContentModule  {...props.formContentModuleProps}  />
    </Layout>
  );
};
