import { UmarVoteTemplate } from "~/components/Templates/UmarVote/UmarVoteTemplate";

export const UmarVoteContainer = () => {
  const homeTemplateProps: React.ComponentProps<typeof UmarVoteTemplate> = {
    headerModuleProps: {
      title: "Vote",
    },
    formContentModuleProps: {
      formCategory: {
        label: "Category",
        category: [
          { value: "Umar", label: "Umar" },
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

  return <UmarVoteTemplate {...homeTemplateProps} />;
};
