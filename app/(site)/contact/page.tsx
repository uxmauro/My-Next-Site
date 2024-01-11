
import Page from "../[slug]/page";
import { getPages } from "@/sanity/sanity-utils";



export default  async function Contact() {
    const pages =  await getPages()

    return(

        <section className="xl:pl-24 py-20" >

        <h1 className=" text-gray-800 uppercase  text-5xl font-extrabold ">
         Contact
        </h1>
     <div className=" my-10 h-0 w-20 border border-bottom border-black"></div>
        <div className=" w-screen text-lg text-gray-700 mt-5">
        <h1>LET&#39;S CHAT!</h1>
        <p>
You can reach me at:
<br></br>
hello@uxmauro.com
        </p>
      </div>
     </section>
    )
}