"use client";

import { HomePageTemplate } from "~/components/Templates/HomePage/HomePageTemplate";

export const HomePageContainer = () => {
  const HomePageTemplateProps: React.ComponentProps<typeof HomePageTemplate> = {
    headerModuleProps: {
      headerProps: {
        title: "Proxima OS"
      }
    },
    mainModuleProps: {
      messageProps: {
        title: "Messages"
      } 
    },
  };

  return (
    <HomePageTemplate {...HomePageTemplateProps} />
  );
};