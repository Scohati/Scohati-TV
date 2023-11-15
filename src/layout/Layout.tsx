import React from 'react'
import { HeaderMegaMenu } from '../components/Header/Header'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import Contato from '../views/Contato'
import Footer from '../components/Footer'
import Filmes from '../views/Filmes'
import Filme from '../views/Filme'
import Categoria from '../views/Categoria'

const Layout: React.FC = () => {

    return (
        <BrowserRouter>
            <section className='h-screen'>
                <HeaderMegaMenu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/filmes" element={<Filmes />}/>
                    <Route path="/filme/:id" element={<Filme />}/>
                    <Route path="/categoria/:id" element={<Categoria />}/>
                    <Route path="*" element={<Navigate to={'/'}/>}/>
                </Routes>
                <Footer />
            </section>
        </BrowserRouter>
    )
}
export default Layout