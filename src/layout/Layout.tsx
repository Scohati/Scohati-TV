import React from 'react'
import { HeaderMegaMenu } from '../components/Header/Header'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import Contato from '../views/Contato'
import Footer from '../components/Footer'

const Layout: React.FC = () => {

    return (
        <BrowserRouter>
            <section className='h-screen'>
                <HeaderMegaMenu />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path='*' element={<Navigate to={'/'}/>}/>
                </Routes>
                <Footer />
            </section>
        </BrowserRouter>
    )
}
export default Layout