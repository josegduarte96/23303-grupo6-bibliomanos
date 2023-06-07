import axios from "axios"

const params = new URLSearchParams()
params.append("sort", "new")
params.append("limit", 150)

//Categorias de libros:
const QUERY_SEARCH = "search.json?" // se le concatena el params q=

//BASE URL API
const BASE_URL = "https://openlibrary.org/"

const apiOL = axios.create({
  baseURL: BASE_URL,
})

export default apiOL
