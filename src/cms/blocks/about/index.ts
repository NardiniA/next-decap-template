import { image, Props as ImageProps } from "@/cms/fields/image";
import type { CmsFieldBase, CmsFieldObject } from "netlify-cms-core";
import { theme, Props as ThemeProps } from "@/cms/fields/theme";

export type Props = {
    image: ImageProps,
    information: {
        subtitle: string,
        title: string,
        text: string,
    },
    configuration: {
        theme: ThemeProps,
        reversed?: boolean,
    }
}

const about: CmsFieldBase & CmsFieldObject = {
  name: "about",
  label: "About",
  widget: "object",
  collapsed: true,
  fields: [
    image(),
    {
      name: "information",
      label: "Information",
      widget: "object",
      collapsed: true,
      fields: [
        {
          name: "subtitle",
          label: "Subtitle",
          widget: "string",
          required: true,
        },
        {
          name: "title",
          label: "Title",
          widget: "string",
          required: true,
        },
        {
          name: "text",
          label: "Text",
          widget: "markdown",
          buttons: ["bold", "italic", "link", "bulleted-list", "numbered-list"],
          editor_components: [],
          required: true,
        },
      ],
    },
    {
      name: "configuration",
      label: "Configuration",
      widget: "object",
      collapsed: true,
      fields: [
        theme([
          {
            label: "White",
            value: "bg-white",
          },
          {
            label: "Light",
            value: "bg-light",
          },
        ]),
        {
          name: "reversed",
          label: "Reversed",
          hint: "Is the image on the left hand side?",
          widget: "boolean",
          default: false,
        },
      ],
    },
  ],
};

export default about;