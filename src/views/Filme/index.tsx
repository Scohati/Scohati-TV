import React from "react"
import { useParams } from "react-router-dom"
import { Info, Recomendacoes, Trailer } from './_components'



const Filme: React.FC = () => {
    const { id } = useParams()

    return (
        <section className="w-full flex gap-12 flex-col px-[6vw] pt-12">
            <Info id={Number(id)}/>
            <Recomendacoes id={Number(id)}/>
        </section>
    )
}

export default Filme