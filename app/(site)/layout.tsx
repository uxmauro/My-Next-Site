
import '../globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import PageWrapper from '@/components/PageWrapper'
import Head from 'next/head'
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';




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
      <Analytics />
      <Head>
      <link rel="icon" href="/favicon.svg" />
      </Head>
     <body className= "xl:ml-10 flex xl:flex-row xl:p-10 " >
    <Navbar/>

      <PageWrapper>
      <main className="flex xl:w-4/5 py-2 pt-8 w-screen justify-center xl:mb-4 mb-40 xl:px-16 px-6 mt-20 xl:mt-2 xl:ml-60">
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