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

#### NOTE

In the [Decap Docs](https://decapcms.org/docs/) you have other backend settings available. Please note that at this moment (March 2023) the `test-repo` backend option for testing your website is not compatible with the cloudinary media libary due to authentication errors. Please use a production backend (E.g: GitHub, GitLabel, Git Gateway, etc) to test and use cloudinary. 

## Project Structure

This template uses the src directory and the app directory (beta). Please refer to the [Next.js `appDir`](https://beta.nextjs.org/docs) docs for more information on how to develop your project.

The CMS configuration is found at `src/app/cms`. This directory is modular to help better organise the project and so you do not repeat code (DRY). It provides a base for you to start including a Blog schema with a title, excerpt, date, author, image and markdown content. Note that you can add custom widgets and custom editor components to the markdown editor in decapcms. Please refer to the [docs](https://decapcms.org/docs/custom-widgets/) to create custom widgets. To register custom widgets, please use the cms object found in 