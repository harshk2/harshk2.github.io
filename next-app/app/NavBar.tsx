'use client';
import Link from 'next/link'
import React from 'react'
import classnames from 'classnames';
import { AiFillBug } from "react-icons/ai";
import { BiSolidBugAlt } from "react-icons/bi";
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const currentPath=usePathname();
    //console.log(currentPath);
    const links=[
        {label:'Dashboard',href:'/'},
        {label:'Issues',href:'/issues'}
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-12 items-center'>
        <Link href="/"><BiSolidBugAlt /></Link>
        <ul className='flex space-x-6'>
            {links.map(link=> <Link 
            key={link.href}
            //className='text-zinc-500 hover:text-zinc-800 transition-colors' 
            className={classnames({
              'text-zinc-900': link.href === currentPath,
              'text-zinc-500': link.href !== currentPath,
              'hover:text-zinc-800 transition-colors': true
            })}
            href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default NavBar