import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import TransactionModal from "~/components/Components/TransactionModal/TransactionModal";
import { HomeContentModule } from "~/components/Modules/UmarHome/HomeContentModule";
import { HomeFooterModule } from "~/components/Modules/UmarHome/HomeFooterModule";
import { HomeHeaderModule } from "~/components/Modules/UmarHome/HomeHeaderModule";

type Props = {
  homeHeaderModuleProps: React.ComponentProps<typeof HomeHeaderModule>;
  homeContentModuleProps: React.ComponentProps<typeof HomeContentModule>;
  homeFooterModuleProps: React.ComponentProps<typeof HomeFooterModule>;
  transactionModalProps: React.ComponentProps<typeof TransactionModal>;
};

export const HomeTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <HomeHeaderModule {...props.homeHeaderModuleProps} />
      </Header>

      <Content
        style={{
          overflow: "hidden",
          backgroundColor: "#1F1F1F", 
          color: "white",
          height: "100%",
        }}
      >
        <HomeContentModule {...props.homeContentModuleProps} />
        <TransactionModal {...props.transactionModalProps} />
      </Content>

      <Footer style={{ padding: 0, minHeight: 50 }}>
        <HomeFooterModule {...props.homeFooterModuleProps} />
      </Footer>
    </Layout>
  );
};
