import type { CmsFieldBase, CmsFieldSelect, CmsSelectWidgetOptionObject } from "netlify-cms-core";
import { deepMerge } from "../utilities/deepMerge";

export type Props = string;

type ColumnSize = (options?: CmsSelectWidgetOptionObject[], overrides?: Partial<CmsFieldBase & CmsFieldSelect>) => CmsFieldBase & CmsFieldSelect;

export const columnSize: ColumnSize = (options = [], overrides) => deepMerge(
    {
        name: "size",
        label: "Column Size",
        widget: "select",
        options: [
            ...options,
            {
                label: "One Quarter",
                value: "col-lg-3 col-12",
            },
            {
                label: "One Third",
                value: "col-lg-4 col-12",
            },
            {
                label: "Half",
                value: "col-lg-6 col-12",
            },
            {
                label: "Two Thirds",
                value: "col-lg-8 col-12",
            },
            {
                label: "Three Quarters",
                value: "col-lg-9 col-12",
            },
            {
                label: "Full Width",
                value: "col-12",
            },
        ],
        default: "col-12",
        required: true,
    },
    overrides,
);