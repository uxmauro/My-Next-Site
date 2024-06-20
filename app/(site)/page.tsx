
import { getPages, getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  const projects = await getProjects();
  const pages =  await getPages()
  return (
    <div>
<div className="mt-10 flex xl:flex-row flex-col gap-8">
    <div className=" flex flex-col gap-8">

    {
    projects.filter((project, index)=> index % 2 === 0).map((project)=>(
   <Link href={`/projects/${project.slug}`} className=" shadow-2xl rounded-lg p-3 transition hover:scale-95 ease-in-out duration-700" key={project._id}>
    {project.image &&(
      <Image
      src={project.image}
      alt={project.alt}
      width = {800}
      height = {1}
      className= "rounded-lg h-auto  object-cover hover:opacity-90" />
    )}
    <div className=" mt-2 ml-2 font-bold text-xl py-4 ">
      {project.name}
      {project.alt}
      </div>
     </Link>
   ))
    }
     </div>
    <div className="flex flex-col mt-4 gap-8">


    {
    projects.filter((project, index)=> index % 2 !== 0).map((project)=>(
   <Link href={`/projects/${project.slug}`} className=" shadow-2xl rounded-lg p-3 transition hover:scale-95 ease-in-out duration-700 " key={project._id}>
    {project.image &&(
      <Image
      src={project.image}
      alt={project.alt}
      width = {800}
      height = {1}
      className= "rounded-lg h-auto  object-cover hover:opacity-90 " />
    )}
    <div className=" mt-2 ml-2 font-bold text-xl py-4">
      {project.name}
      {project.alt}
      </div>
     </Link>
   ))
    }
     </div>

</div>




   </div>
  )
}