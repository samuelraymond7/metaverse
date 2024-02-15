'use client';
import {motion} from 'framer-motion'
import styles from '../styles'
import {navVariants} from '../utils/motion'
import { useState } from 'react';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  return(
    <motion.nav variants={navVariants} initial="hidden" whileInView="show" className={`${styles.xPaddings} py-8 relative`}>
      <div className=' absolute w-[50%] inset-0 gradient-01'/>
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 relative`}>
        <img src="/search.svg" alt="search" className=' w-[24px] h-[24px] object-contain'/>
        <h2 className=' font-extrabold text-[24px] leading-[30px] text-white'>METAVERSUS</h2>
        <img src={`${toggle?"close.svg":"menu.svg"}`} alt="menu" className='w-[24px] h-[24px] object-contain cursor-pointer' onClick={()=>settoggle((prev)=>(!prev))} />

        <div className={`${toggle?'flex':'hidden'} p-6 bg-bp-gradient absolute top-9 right-0 min-w-[140px] rounded-xl z-20 text-white`}>
          <ul className=' list-none flex items-end flex-1 flex-col'>
            {navLinks.map((nav,index)=>(
              <li key={nav.id} className={`font-normal cursor-pointer text-[16px] text-white ${index===navLinks.length-1?'mb-0':'mb-10'}`} onClick={()=>settoggle((prev)=>(!prev))}>
                <a href={nav.id} target={nav.target} rel='noopener noreferrer'>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul> 
        </div>
      </div>
    </motion.nav>
 );
}

export default Navbar;
