import { useRouter } from "next/navigation";
import { useState } from "react";
import { PageWithFormTemplate } from "~/components/Templates/PageWithForm/PageWithFormTemplate";

export const PageWithFormContainer = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<any>({});

  const pagewithformTemplateProps: React.ComponentProps<
    typeof PageWithFormTemplate
  > = {
    pageWithFormHeaderModuleProps: {
      title: "Vote",
      customBg: "bg-white text-black font-[450] text-[20px]"
    },
    pageWithFormFormModuleProps: {
      setFormData,
    },
  };

  return <PageWithFormTemplate {...pagewithformTemplateProps} />;
};
