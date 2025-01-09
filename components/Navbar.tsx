import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => (
    <nav className='w-full fixed top-0 z-50 border-black-200 bg-black py-7'>
        <div className='flex items-center justify-between mx-auto w-full flex-between max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
            <Link href="/">
                <Image src="/educa-logo.png" alt='educa logo' width={200} height={300}/>
            </Link>

            <GiHamburgerMenu className='block md:hidden' size={30}/>

            <ul className='max-md:hidden flex justify-start items-start gap-x-3'>
                <li className='text-purple-400'>
                    <Link href="/">Latest Addition</Link>
                </li>
                <li className=''>
                    <Link href="/popular">Most Popular</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Navbar