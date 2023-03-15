import type { CmsCollectionFile } from "netlify-cms-core";
import { url } from "../fields/url";
import { LinkProps } from "./menus";

export type Props = {
  subscribe: SubscribeProps;
  main: FooterProps;
};

export type FooterProps = {
  description: string;
  links: LinkProps[];
  contact: string;
  copyright: string;
}

export type SubscribeProps = {
  title: string;
    subtitle: string;
    showSubscribe?: boolean;
}

const footer: CmsCollectionFile = {
  name: "footer",
  label: "Footer",
  file: "src/config/footer.json",
  description: "Site Footer",
  fields: [
    {
      name: "subscribe",
      label: "Subscribe",
      widget: "object",
      collapsed: true,
      fields: [
        {
          name: "title",
          label: "Footer Title",
          widget: "string",
          required: true,
        },
        {
          name: "subtitle",
          label: "Subtitle",
          widget: "string",
          required: true,
        },
        {
          name: "showSubscribe",
          label: "Show Subscribe Section",
          widget: "boolean",
          default: false,
        },
      ],
    },
    {
      name: "main",
      label: "Main Section",
      widget: "object",
      collapsed: true,
      fields: [
        {
          name: "description",
          label: "Description",
          widget: "text",
          required: true,
        },
        {
          name: "links",
          label: "Footer Links",
          widget: "list",
          min: 1,
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
          name: "contact",
          label: "Contact Text",
          widget: "markdown",
          buttons: ["bold", "italic", "link"],
          editor_components: [],
          minimal: true,
          required: true,
        },
        {
          name: "copyright",
          label: "Copyright Text",
          widget: "string",
          required: true,
        },
      ],
    },
  ],
};

export default footer;
