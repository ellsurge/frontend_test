import { message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { JehoVoteTemplate } from "~/components/Templates/JehoVote/JehoVoteTemplate";
// import { JehoHomeTemplate } from "~/components/Templates/JehoHome/JehoHomeTemplate";

export const JehoVoteContainer = () => {
  const homeTemplateProps: React.ComponentProps<typeof JehoVoteTemplate> = {
    headerModuleProps: {
      title: "Vote",
    },
    formContentModuleProps: {
      formCategory: {
        label: "Category",
        category: [
          { value: "clement", label: "Clement" },
          { value: "tobi", label: "Tobi" },
          { value: "fortune", label: "Fortune" },
          { value: "seun", label: "Seun" },
        ],
        name: "category",
      },
      formDate: {
        label: "Start",
        name: "date",
      },
      formTitle: {
        label: "Vote Title",
        name: "title",
      },
      formDescription: {
        label: "Description",
        name: "description",
      },
      formImageUpload: {
        label: "Image",
        name: "image",
      },
    },
  };

  return <JehoVoteTemplate {...homeTemplateProps} />;
};