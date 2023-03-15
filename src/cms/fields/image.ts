import type { CmsFieldBase, CmsFieldObject } from "netlify-cms-core";
import { deepMerge } from "../utilities/deepMerge";

export type Props = {
    src: string,
    alt: string,
}

type Image = (overrides?: Partial<CmsFieldBase & CmsFieldObject>) => CmsFieldBase & CmsFieldObject;

export const image: Image = (overrides) => deepMerge(
    {
        name: "image",
        label: "Image",
        widget: "object",
        collapsed: true,
        fields: [
            {
                name: "src",
                label: "Image",
                widget: "image",
                required: true,
            },
            {
                name: "alt",
                label: "Image Description",
                widget: "string",
                required: true,
            },
        ],
    },
    overrides,
)