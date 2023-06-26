import axios from "axios"

//BASE URL API
const BASE_URL = "https://openlibrary.org/"

const apiOL = axios.create({
  baseURL: BASE_URL,
})

export default apiOL
