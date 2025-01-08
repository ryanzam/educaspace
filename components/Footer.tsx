import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-sm flex justify-between text-gray-400 my-3'>
        <p>Copyright © 2025 Educaspace | All Rights Reserved</p>

        <div className="flex gap-x-3">
            <Link href="">Privacy Policy</Link>
            <Link href="">Terms & Conditions</Link>
        </div>
    </footer>
  )
}

export default Footer