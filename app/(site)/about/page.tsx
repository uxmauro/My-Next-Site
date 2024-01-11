
import Page from "../[slug]/page";
import { getPages } from "@/sanity/sanity-utils";



export default  async function About() {
    const pages =  await getPages()

    return(
        <div>

        <Page params={{
            slug: 'about'
        }}
></Page>
    </div>
    )
}