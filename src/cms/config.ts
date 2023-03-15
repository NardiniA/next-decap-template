import type { CmsConfig } from "netlify-cms-core";
import blog from "./collections/blog";
import pages from "./collections/pages";
import globals from "./globals";
import footer from "./globals/footer";
import menus from "./globals/menus";
import siteConfig from "./globals/siteConfig";

const config: CmsConfig = {
  load_config_file: false,
  backend: {
    name: "github",
    repo: "<GITHUB_USER>/<GITHUB_REPO>",
    branch: "<GITHUB_REPO_BRANCH_NAME>",
  },
  media_library: {
    name: "cloudinary",
    config: {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME + "",
      api_key: process.env.CLOUDINARY_API_KEY + "",
    },
  },
  site_url: process.env.SITE_URL + "",
  display_url: process.env.SITE_URL + "",
  publish_mode: "editorial_workflow",
  collections: [
    blog,
    pages,
    globals([
      siteConfig,
      menus,
      footer,
    ]),
  ],
};

export default config;