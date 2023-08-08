import { getPages } from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link';
import logo from '@/public/logo.svg'
import Socials from './social-media';


export default async function Navbar(){

const pages = await getPages()

return (
  <>
  
<div className='hidden xl:block w-1/5 '></div>

    <header className=' bg-white xl:bg-transparent py-12 items-center xl:items-start h-10 xl:w-80 w-full flex-row flex xl:flex-col fixed justify-around xl:h-screen gap-4 xl:py-20'>
      <Link href={'/'} className='flex flex-row'>
        <Image src={logo} alt="logo" className=' w-1/6 h-auto'/>
        <p className=" font-extrabold uppercase xl:text-xl py-8 ml-4" > Mauro Guerrero</p>
        </Link>
  
  <div className="hidden xl:flex flex-col gap-5 text-gray-600 font-bold text-1xl mb-10">

  <Link href={'/'} className="uppercase relative group active:text-gray-950" >
      Portfolio
      <span className='h-[2px] inline-block w-0 bg-black absolute left-0 -bottom-0.5 group-hover:w-4/12 transition-[width] ease duration-500' >&nbsp;</span>
      </Link>
    {pages.map((page)=>(
        <Link key={page._id} href={`/#${page.slug}`} className="uppercase relative group">
        {page.title}

      <span className='h-[2px] inline-block w-0 bg-black absolute left-0 -bottom-0.5 group-hover:w-4/12 transition-[width] ease duration-500' >&nbsp;</span>
      </Link>
    ))}
  </div>

      <Socials/>

</header>

    </>

)}