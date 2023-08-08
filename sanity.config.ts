import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";


const config = defineConfig({

  projectId:  '5mneb0jv',
  dataset: 'production',
  title: 'portfolio-site',
  apiVersion: '2023-07-03',
  basePath: '/admin-mauro',
  plugins: [deskTool()],
  schema: { types: schemas }

})

export default config