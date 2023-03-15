import type { CmsFieldBase, CmsFieldSelect } from "netlify-cms-core";
import { deepMerge } from "../utilities/deepMerge";

export type Props = string;

type Align = (overrides?: Partial<CmsFieldBase & CmsFieldSelect>) => CmsFieldBase & CmsFieldSelect;

export const align: Align = (overrides) => deepMerge(
    {
        name: "align",
        label: "Align",
        widget: "select",
        options: [
            {
                label: "Left",
                value: "left",
            },
            {
                label: "Centre",
                value: "center",
            },
            {
                label: "Right",
                value: "right",
            },
        ],
        default: "center",
        required: true,
    },
    overrides,
);