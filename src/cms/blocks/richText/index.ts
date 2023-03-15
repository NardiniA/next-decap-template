import type { CmsFieldBase, CmsFieldObject } from "netlify-cms-core";
import { columnSize, Props as ColumnSizeProps } from "@/cms/fields/columnSize";
import { align, Props as AlignProps } from "@/cms/fields/align";

export type Props = {
  size: ColumnSizeProps,
  align: AlignProps,
  content: string,
};

const richText: CmsFieldBase & CmsFieldObject = {
  name: "richText",
  label: "Rich Text",
  widget: "object",
  collapsed: true,
  fields: [
    columnSize(),
    align(),
    {
      name: "content",
      label: "Content",
      widget: "markdown",
      required: true,
    },
  ],
};

export default richText;