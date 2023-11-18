import { Skeleton } from "@mantine/core"
import React, { useEffect, useState } from "react"
import { getEmCartazService } from "../../../services/Filmes"
import Slider from "../../../components/Carousel"


const LancamentosComponent: React.FC = () => {
    const [lancamentos, setLancamentos] = useState<any[]>([])
    const [carregando, setCarregando] = useState(true)

    const pages = [2, 3, 4]

    useEffect(() => {
        getLancamentos()
    }, [])

    const getLancamentos = async () => {
        setCarregando(true)
        const responses = await Promise.all(pages.map(async (page) => {
            return await getEmCartazService(page)
        }))

        setLancamentos(responses)
        setCarregando(false)
    }

    const renderLancamentos = (page: number) => {
        return (
            <div className="w-full h-full">
                {carregando ? <Skeleton className="h-full" radius={"md"} /> : <Slider data={lancamentos[page]?.results} pagination={false} itemsPorSlide={1}/>}
            </div>
        );
    };

    return (
        <section className='w-full flex flex-col gap-4'>
            <div className='flex justify-between w-full'>
            <h2 className='font-bold text-white text-2xl'>| Lançamentos</h2>
            <button>Ver todos</button>
            </div>
            <section className='w-full h-[500px] flex justify-center gap-4'>
                <div className='w-3/5 h-[500px]'>
                    {renderLancamentos(0)}
                </div>
                <section className='w-2/5 h-full flex flex-col gap-4'>
                    <div className='h-[242px]'>
                        {renderLancamentos(1)}
                    </div>
                    <div className='h-[242px]'>
                        {renderLancamentos(2)}
                    </div>
                </section>
            </section>
        </section>
    )
}

export default LancamentosComponent