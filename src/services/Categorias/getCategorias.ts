import API from "../API";

export default async function getCategorias() {
    return  await API.get('genre/movie/list?language=pt-br')
}