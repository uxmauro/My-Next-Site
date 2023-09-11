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

    <header className=' z-10 shadow-lg xl:shadow-none bg-white xl:bg-transparent py-12 items-center xl:items-start h-10 xl:w-80 w-full flex-row flex xl:flex-col fixed justify-around xl:h-screen gap-4 xl:py-20'>
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
    <Link href={'https://uxmauro.github.io'} target='_blank' className="uppercase relative group active:text-gray-950" ><div className='flex gap-2'> Playground <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 9C5.20435 9 4.44129 9.31607 3.87868 9.87868C3.31607 10.4413 3 11.2044 3 12C3 12.7956 3.31607 13.5587 3.87868 14.1213C4.44129 14.6839 5.20435 15 6 15H9C9.26522 15 9.51957 15.1054 9.70711 15.2929C9.89464 15.4804 10 15.7348 10 16C10 16.2652 9.89464 16.5196 9.70711 16.7071C9.51957 16.8946 9.26522 17 9 17H6C4.67392 17 3.40215 16.4732 2.46447 15.5355C1.52678 14.5979 1 13.3261 1 12C1 10.6739 1.52678 9.40215 2.46447 8.46447C3.40215 7.52678 4.67392 7 6 7H9C9.26522 7 9.51957 7.10536 9.70711 7.29289C9.89464 7.48043 10 7.73478 10 8C10 8.26522 9.89464 8.51957 9.70711 8.70711C9.51957 8.89464 9.26522 9 9 9H6ZM7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13H8C7.73478 13 7.48043 12.8946 7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12ZM15 7C14.7348 7 14.4804 7.10536 14.2929 7.29289C14.1054 7.48043 14 7.73478 14 8C14 8.26522 14.1054 8.51957 14.2929 8.70711C14.4804 8.89464 14.7348 9 15 9H18C18.7956 9 19.5587 9.31607 20.1213 9.87868C20.6839 10.4413 21 11.2044 21 12C21 12.7956 20.6839 13.5587 20.1213 14.1213C19.5587 14.6839 18.7956 15 18 15H15C14.7348 15 14.4804 15.1054 14.2929 15.2929C14.1054 15.4804 14 15.7348 14 16C14 16.2652 14.1054 16.5196 14.2929 16.7071C14.4804 16.8946 14.7348 17 15 17H18C19.3261 17 20.5979 16.4732 21.5355 15.5355C22.4732 14.5979 23 13.3261 23 12C23 10.6739 22.4732 9.40215 21.5355 8.46447C20.5979 7.52678 19.3261 7 18 7H15Z" fill="black"/>
</svg>
</div>
    <span className='h-[2px] inline-block w-0 bg-black absolute left-0 -bottom-0.5 group-hover:w-4/12 transition-[width] ease duration-500' >&nbsp;</span>
    </Link>
  </div>

      <Socials/>

</header>

    </>

)}