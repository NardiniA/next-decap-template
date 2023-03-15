import type { CmsFieldBase, CmsFieldObject } from "netlify-cms-core";

export type Props = {
    title: string,
    description?: string,
    bg?: string,
}

const banner: CmsFieldBase & CmsFieldObject = {
  name: "banner",
  label: "Banner",
  widget: "object",
  collapsed: true,
  fields: [
    {
      name: "title",
      label: "Title",
      widget: "string",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      widget: "text",
      required: false,
    },
    {
      name: "bg",
      label: "Background Image",
      widget: "image",
      required: false,
    },
  ],
};

export default banner;
