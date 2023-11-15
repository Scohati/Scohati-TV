import API from "../API"

async function getAbstract(url: string)  {
    const { data } = await API.get(url)
    return data
}


export const getEmCartaz = async (page: number) => {
    const resp = await getAbstract(`movie/now_playing?language=pt-br&page=${page}`)
    return resp
}

export const populares = async (page: number) => {
    let resp = await getAbstract(`movie/popular?language=pt-BR&page=${page}`)
    return resp
}