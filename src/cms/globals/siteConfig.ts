import { CmsCollectionFile } from "netlify-cms-core";
import { url } from "../fields/url";

export type Props = {
  logo: string;
  logoText: string;
  baseURL: string;
  postPerPage: number;
  social: SocialProps[];
  metaData: MetaDataProps;
};

export type SocialProps = {
  name: string;
  url: string;
  icon: string;
};

export type MetaDataProps = {
  title: string;
    titleSuffix: string;
    description: string;
    author: string;
    keywords: string[];
    ogImage: string;
    theme: string;
}

const siteConfig: CmsCollectionFile = {
  name: "config",
  label: "Site Configuration",
  file: "src/config/site.config.json",
  fields: [
    {
      name: "logo",
      label: "Logo",
      widget: "image",
      required: true,
    },
    {
      name: "logoText",
      label: "Logo Text",
      widget: "string",
      required: true,
    },
    url({
        name: "baseURL",
        label: "Base URL",
    }),
    {
      name: "postPerPage",
      label: "Pagination Size",
      widget: "number",
      required: true,
    },
    {
      name: "social",
      label: "Social Media Accounts",
      label_singular: "Social Media Account",
      widget: "list",
      minimize_collapsed: true,
      add_to_top: true,
      collapsed: true,
      summary: "{{fields.name}}",
      fields: [
        {
          name: "name",
          label: "Platform Name",
          widget: "string",
          hint: "Example: Instagram, Facebook...",
          required: true,
        },
        url({
            label: "Account URL",
            hint: "The URL of your social media account.",
        }),
        {
          name: "icon",
          label: "Icon",
          widget: "string",
          required: true,
        },
      ],
    },
    {
      name: "metaData",
      label: "Meta Data",
      widget: "object",
      collapsed: true,
      fields: [
        {
          name: "title",
          label: "Default Title",
          widget: "string",
          required: true,
        },
        {
          name: "titleSuffix",
          label: "Title Suffix",
          widget: "string",
          required: true,
        },
        {
          name: "description",
          label: "Default Description",
          widget: "text",
          required: true,
        },
        {
          name: "author",
          label: "Default Author",
          widget: "string",
          required: true,
        },
        {
          name: "keywords",
          label: "Keywords",
          widget: "list",
          minimize_collapsed: true,
          collapsed: true,
          min: 1,
          summary: "{{fields.word}}",
          field: {
            name: "word",
            label: "Keyword",
            widget: "string",
            required: true,
          },
        },
        {
          name: "ogImage",
          label: "Default Sharing Image",
          widget: "image",
          required: true,
          hint: "Default image used when sending links via text or social media",
        },
        {
          name: "theme",
          label: "Theme Colour",
          widget: "color",
          default: "#3F885C",
          required: true,
        },
      ],
    },
  ],
};

export default siteConfig;