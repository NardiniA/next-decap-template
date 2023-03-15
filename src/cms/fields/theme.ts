import type {
  CmsFieldBase,
  CmsFieldSelect,
  CmsSelectWidgetOptionObject,
} from "netlify-cms-core";
import { deepMerge } from "../utilities/deepMerge";

export type Props = string;

type Theme = (options?: CmsSelectWidgetOptionObject[], overrides?: Partial<CmsFieldBase & CmsFieldSelect>) => CmsFieldBase & CmsFieldSelect;

export const theme: Theme = (options = [], overrides) => deepMerge(
    {
        name: "theme",
        label: "Theme",
        widget: "select",
        options: [
            {
                label: "White",
                value: "bg-white"
            },
            {
                label: "Light",
                value: "bg-light"
            },
            {
                label: "Primary",
                value: "bg-primary"
            },
            {
                label: "Dark",
                value: "bg-dark"
            },
        ],
        default: "bg-white",
        required: true,
    },
    overrides,
);