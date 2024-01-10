import RichTextComponents from "@/components/RichTextComponent";
import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";


type Props = {
    params: {slug: string}
}

export default async function Page({ params }: Props) {

    const page =  await getPage(params.slug)


    return (
        <section className="py-20" id={page.slug}>

           <h1 className=" text-gray-800 uppercase  text-5xl font-extrabold ">
            {page.title}
           </h1>
        <div className=" my-10 h-0 w-20 border border-bottom border-black"></div>
           <div className=" w-fit text-lg text-gray-700 mt-5">
           <PortableText value={page.content} components={RichTextComponents}/>
         </div>
        </section>
    )

}