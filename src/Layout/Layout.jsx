import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className='w-full px-6 pt-32  h-[50rem] bg-slate-900 text-white'>
                {children}
            </div>
            <Footer />
        </>
    )
}
