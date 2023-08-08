import { getPages } from '@/sanity/sanity-utils'
import '../globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import PageWrapper from '@/components/PageWrapper'
import Head from 'next/head'



export const metadata: Metadata = {
  title: 'Mauro | Product Designer',
  description: 'NextJS + Sanity Webiste',
  viewport: "width=device-width, initial-scale=1"
}




export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  //Get all of the pages
/* 
  const pages = await getPages() */

  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.svg" />
      </Head>
     <body className="ml-10  flex p-10" >
    <Navbar/>
  
      <PageWrapper>
      <main className=" flex xl:w-4/5 py-2 pt-8 px-16 ml-60">
        {children}
      </main>
        
      </PageWrapper>
          <div className="parent-gradient">
              <div className='gradient-background'>
              </div> 
          </div>
        </body>
    </html>
  )
}