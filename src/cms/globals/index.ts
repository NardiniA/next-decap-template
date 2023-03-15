import type { CmsCollection, CmsCollectionFile } from "netlify-cms-core";
import { deepMerge } from "../utilities/deepMerge";

type Globals = (
  files: CmsCollectionFile[],
  overrides?: Partial<CmsCollection>
) => CmsCollection;

const globals: Globals = (files = [], overrides) =>
  deepMerge(
    {
      name: "globals",
      label: "Globals",
      delete: false,
      editor: {
        preview: false,
      },
      format: "json",
      extension: "json",
      files: [...files],
    },
    overrides
  );

export default globals;
