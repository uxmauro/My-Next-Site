import { getPages, getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import Page from "./[slug]/page";


export default async function Home() {
  const projects = await getProjects();
  const pages =  await getPages() 
  return (
    <div> 
{/* 

    <h1 className="text-6xl font-bold">Hello I&apos;m <span className=" bg-gradient-to-tr from-blue-600 to-green-300 bg-clip-text text-transparent">Mauro!</span></h1>
    <p className="mt-3 text-xl text-gray-500"> Thanks you for visitng my site here are a few projects I have been working on:</p>

    <h2 className=" mt-24 font-bold text-gray-700 text-3xl">My Work</h2> 
     */}
   
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

 <div>
    {
      pages.map((pages)=>(

        <Page params={{
            slug: pages.slug
            
          }} key={pages._id}/>
      ))
    }
    </div>
 

   </div>
  )
}