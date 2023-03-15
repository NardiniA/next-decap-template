import type { CmsCollection } from "netlify-cms-core";

export type Props = {
    title: string,
    excerpt: string,
    image: string,
    date: string,
    author: string,
    content: string,
};

const blog: CmsCollection = {
    name: "blog",
    label: "Blog",
    label_singular: "Post",
    folder: "src/content/blog",
    create: true,
    slug: "{{slug}}",
    extension: "md",
    fields: [
        {
            name: "title",
            label: "Title",
            widget: "string",
            required: true,
        },
        {
            name: "excerpt",
            label: "Excerpt",
            widget: "text",
            required: true,
        },
        {
            name: "image",
            label: "Cover Image",
            widget: "image",
            required: true,
        },
        {
            name: "date",
            label: "Publish Date",
            widget: "datetime",
            format: "LL",
            picker_utc: true,
            required: true,
        },
        {
            name: "author",
            label: "Author",
            widget: "string",
            required: true,
        },
        {
            name: "content",
            label: "Content",
            widget: "markdown",
            required: true,
        }
    ],
}

export default blog;
