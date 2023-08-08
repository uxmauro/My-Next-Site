import { createClient } from "next-sanity";
import config from "@/sanity/config/client-config";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;



 const client = createClient ({
    projectId: "5mneb0jv",
    dataset: "production",
    apiVersion: '2023-07-03'
})

export default client