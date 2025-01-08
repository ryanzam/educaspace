import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default HomeLayout