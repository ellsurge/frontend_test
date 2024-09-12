"use client";
import { useRouter } from "next/navigation";
import { EmptyTemplate } from "~/components/Templates/Empty/EmptyTemplate";

export const EmptyContainer = () => {
  const router = useRouter();

  const emptyTemplateProps: React.ComponentProps<typeof EmptyTemplate> = {
    emptyHeaderModuleProps: {
      headerProps: {
        title: "Empty",
        customBg: "",
        onClickLeftIcon: () => {
          console.log("Left icon clicked");
          router.back();
        },
        onClickRightIcon: () => console.log("Right icon clicked"),
      },
    },
    emptyContentModuleProps: {
      moduleProps: "",
      componentProps: { title: "" },
      atomProps: { title: "" },
    },
    emptyFooterModuleProps: {
      footerProps: { title: "EmptyFooterModule" },
    },
  };

  return <EmptyTemplate {...emptyTemplateProps} />;
};
