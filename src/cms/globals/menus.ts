import type { CmsCollectionFile } from "netlify-cms-core";
import { url } from "../fields/url";

export type Props = {
  mainMenu: LinkProps[];
  cta: LinkProps;
};

export type LinkProps = {
    text: string;
    href: string;
  }

const menus: CmsCollectionFile = {
  name: "menus",
  label: "Menus",
  file: "src/config/menus.json",
  description: "Site Navigation",
  fields: [
    {
      name: "mainMenu",
      label: "Main Menu",
      widget: "list",
      minimize_collapsed: true,
      summary: "{{fields.text}}",
      min: 1,
      collapsed: true,
      fields: [
        {
          name: "text",
          label: "Text",
          widget: "string",
          required: true,
        },
        url({
          name: "href",
        }),
      ],
    },
    {
      name: "cta",
      label: "Call To Action",
      widget: "object",
      collapsed: true,
      fields: [
        {
          name: "text",
          label: "Text",
          widget: "string",
          required: true,
        },
        url({
          name: "href",
        }),
      ],
    },
  ],
};

export default menus;
