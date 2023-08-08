import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from '@sanity/image-url'
import client from "@/lib/sanity.client";



function urlFor (source:any) {
    return imageUrlBuilder(client).image(source).url()
  }
  
 


 const RichTextComponents = {
        types: {
          image: ({value}:any) => {
            return (
                <div className="relative w-full  m-10 p-2 mx-auto">
                    <Image
                        className="object-contain rounded-md" 
                        src={urlFor(value)}
                        width={1920}
                        height={100}
                        alt={value.alt || 'where '}
                        loading="lazy"          
                           />
                </div>
              
            );
          },
        },

        list:{
            bullet: ({children, value}: any) => (
                <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
                ),
            number: ({children, value}: any) => (
                <ol className=" mt-lg list-decimal">{children} </ol>
            ),
        },

        block: {
            h1: ({children}: any) => (
                <h1 className="text-5xl py-10 font-bold"> {children}</h1>
            ),

            h2: ({children}: any) => (
                <h2 className="text-4xl py-10 font-bold"> {children}</h2>
            ),
            h3: ({children}: any) => (
                <h3 className="text-3xl py-10 font-bold"> {children}</h3>
            ),
            h4: ({children}: any) => (
                <h4 className="text-2xl py-10 font-bold"> {children}</h4>
            ),
            p: ({children}: any) => (
                <p className="text-2xl py-10 font-bold"> {children}</p>
            ),
            blockquote: ({children}: any) => (
                <blockquote>
                    {children}
                </blockquote>
            ),
        },
        marks: {
            link: ({children, value}: any) => {
                const rel = !value.href.startsWith('/')
                ? 'noreferrer noopener'
                : undefined;

                return (
                    <Link
                    href={value.href}
                    rel={rel}
                    className=" underline decoration-lime-500 hover:decoration-gray-800"
                    >
                        {children}
                    </Link>
                )

            }

        }

    }
 
        

    export default RichTextComponents