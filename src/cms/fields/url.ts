import type { CmsFieldBase, CmsFieldStringOrText } from "netlify-cms-core";
import { deepMerge } from "../utilities/deepMerge";

export type Props = string;

type URL = (overrides?: Partial<CmsFieldBase & CmsFieldStringOrText>) => CmsFieldBase & CmsFieldStringOrText;

export const url: URL = (overrides) => deepMerge(
    {
        name: "url",
        label: "URL",
        hint: "Example: \"/about\" => \"https://example.com/about\".",
        widget: "string",
        required: true,
    },
    overrides,
);