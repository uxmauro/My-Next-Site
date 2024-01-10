import { getProject } from "@/sanity/sanity-utils";
import {PortableText} from "@portabletext/react"
import Image from "next/image";
import RichTextComponents from "@/components/RichTextComponent";


import {BiArrowBack } from "react-icons/bi";
import Link from "next/link";



/* const SampleImageComponent = ({value}: any) => {
  return (
    <Img
      src= {urlBuilder().image(value).url()}
      alt={""}
      width={1920}
      height={1080}
    />
  )
}

 const components = {
  types: {
    image: SampleImageComponent,
  },
}

 */





type Props = {
    params: { project: string }
}

 export default async function Project ({params}:Props) {
    const slug = params.project;
    const project =  await getProject(slug);


    return <div className=" xl:ml-10 my-20">
         <header className="flex  items-center">
          <Link href={'/'} className="w-10 h-10 text-4xl flex items-center justify-center mx-4 hover:drop-shadow-md">
           <BiArrowBack/>
          </Link>
         <h1 className=" text-gray-800 text-5xl font-extrabold ">
         {project.name}
         </h1>
         </header>
         <Image
            src={project.image}
            alt={project.alt}
            width={1920}
            height={1080}
            className="mt-10 drop-shadow-lg object-cover rounded-xl"
            />


         <div className=" text-lg text-gray-700 mt-5">
           <PortableText value={project.content} components={RichTextComponents}/>
         </div>

         </div>
 }