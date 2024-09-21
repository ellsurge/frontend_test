import { HomePageHeaderModule } from "~/components/Modules/HomePage/HomePageHeaderModule";
import { HomePageFooterModule } from "~/components/Modules/HomePage/HomePageFooterModule";
import { HomePageMainModule } from "~/components/Modules/HomePage/HomePageMainModule";
import { Layout } from "antd";


type Props = {
  headerModuleProps: React.ComponentProps<typeof HomePageHeaderModule>;
  mainModuleProps: React.ComponentProps<typeof HomePageMainModule>;

};

export const HomePageTemplate = (props: Props) => {
  return (
    <Layout>
      <HomePageHeaderModule {...props.headerModuleProps} />
      <HomePageMainModule {...props.mainModuleProps} />
      <HomePageFooterModule/>
    </Layout>
  );
};
