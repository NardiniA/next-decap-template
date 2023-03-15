This is a [Next.js](https://nextjs.org/) template using the `app` directory with [Decap CMS](https://decapcms.org/). 

## Getting Started

First, set environment variables using `.env`, `.env.local` or any other way you wish. 
Include your cloudinary cloud name and apikey as well as the site url which by default Next.js uses http://localhost:3000. Also add your github details. Use the `.env.example` file to guide you on what to add. 

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the results.

You can start adding content by navigating to [/admin](http://localhost:3000/admin). This will change the data in your github repo which would update content on your production website.

## Project Structure

This template uses the src directory and the app directory (beta). Please refer to the [Next.js `appDir`](https://beta.nextjs.org/docs) docs for more information on how to develop your project.

The CMS configuration is found at `src/app/cms`. This directory is modular to help better organise the project and so you do not repeat code (DRY). It provides a base for you to start including: 
- A Blog schema with a title, excerpt, date, author, image and markdown content. 
- A Pages schema with a page title, sections (page builder) and page information (Meta Data).
- A Globals collection with individual data files for the sites general configuration such as default title, description, logo, etc. As well as menus and footer files.

Note that you can add custom widgets and custom editor components to the markdown editor in decapcms. Please refer to the [docs](https://decapcms.org/docs/custom-widgets/) to create custom widgets. To register custom widgets, please use the `cms` object found at `src/cms/register.ts`.

This template also provides some simple utility functions such as a `deepMerge` function to allow you to create overridable CMS field functions. It also has other fields such as URL fields that can be reused.

## Learn More

For any more information, please refer to the [Decap CMS Docs](https://decapcms.org/docs) and the [Next.js Beta Docs](https://beta.nextjs.org/docs). 

## Issues

In the [Decap Docs](https://decapcms.org/docs/) you have other backend settings available. Please note that at this moment (March 2023) the `test-repo` backend option for testing your website is not compatible with the cloudinary media libary due to authentication errors. Please use a production backend (E.g: GitHub, GitLabel, Git Gateway, etc) to test and use cloudinary. 

Also note that Decap CMS is not designed to run on React 18 so it may result in unexpected errors but none have yet been found. Please help contribute your ideas and help to the Decap project.