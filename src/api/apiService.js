import axios from "axios"

const searchParams = {
  sort: "new",
  limit: 200,
  language: "spa",
}
const params = new URLSearchParams(searchParams)
//BASE URL API
const BASE_URL = "https://openlibrary.org/"

const apiOL = axios.create({
  baseURL: BASE_URL,
  params,
})

export default apiOL
