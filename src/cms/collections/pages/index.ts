import about, { Props as AboutProps } from "@/cms/blocks/about";
import banner, { Props as BannerProps } from "@/cms/blocks/banner";
import richText, { Props as RichTextProps } from "@/cms/blocks/richText";
import type { CmsCollection } from "netlify-cms-core";

export type Props = {
    title: string,
    sections: (AboutProps | BannerProps | RichTextProps)[],
    meta: {
      metaTitle: string,
      metaDescription: string,
    },
}

const pages: CmsCollection = {
  name: "pages",
  label: "Pages",
  label_singular: "Page",
  folder: "src/content/pages",
  create: true,
  slug: "{{slug}}",
  format: "json",
  extension: "json",
  fields: [
    {
      name: "title",
      label: "Page Name",
      hint: "Name of the file and URL.",
      widget: "string",
      required: true,
    },
    {
      name: "sections",
      label: "Page Sections",
      widget: "list",
      types: [
        about,
        banner,
        richText,
      ],
    },
    {
      name: "meta",
      label: "Page Information",
      widget: "object",
      collapsed: true,
      fields: [
        {
          name: "metaTitle",
          label: "Page Title",
          widget: "string",
          required: true,
        },
        {
          name: "metaDescription",
          label: "Page Description",
          widget: "text",
          required: true,
        },
      ],
    },
  ],
};

export default pages;
