import React from "react"
import { useParams } from "react-router-dom"

const Categoria: React.FC = () => {
    const { id } = useParams()
    return (
        <section>
            Categoria id: {id}
        </section>
    )
}

export default Categoria