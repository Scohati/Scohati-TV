import React from "react"
import { useParams } from "react-router-dom"


const Filme: React.FC = () => {
    const { id } = useParams()

    return (
        <section>
            Detalhes do filme do id: {id}
        </section>
    )
}

export default Filme