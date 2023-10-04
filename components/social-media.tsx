"use client"

import { BiLogoDribbble, BiLogoGithub, BiLogoLinkedin, BiLogoTwitter, BiLogoCodepen } from "react-icons/bi";
import {motion} from 'framer-motion'



export default function Socials(){

return(

<div className="hidden xl:flex flex-row gap-6 text-gray-500 text-3xl">
<motion.a href="https://github.com/uxmauro" className='social-icons' target="_blank" whileHover={{y: -6}} whileTap={{scale: 0.95}} >
<BiLogoGithub/>
</motion.a>

<motion.a href="https://codepen.com/uxmauro" className='social-icons' target="_blank" whileHover={{y: -6}} whileTap={{scale: 0.95}} >
<BiLogoCodepen />
</motion.a>

<motion.a href="https://linkedin.com/in/uxmauro" className='social-icons' target="_blank" whileHover={{y: -6}} whileTap={{scale: 0.95}}>
<BiLogoLinkedin/>
</motion.a>

<motion.a href="https://dribbble.com/uxmauro" className='social-icons' target="_blank" whileHover={{y: -6}} whileTap={{scale: 0.95}}>
<BiLogoDribbble/>
</motion.a>


<motion.a href="https://twitter.com/uxmauroo" className='social-icons' target="_blank" whileHover={{y: -6}} whileTap={{scale: 0.95}} >
<BiLogoTwitter />
</motion.a>


</div>
)
}