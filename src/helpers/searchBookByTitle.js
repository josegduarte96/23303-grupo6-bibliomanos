import apiOL from "../api/apiService"

const searchParams = {
  sort: "new",
  limit: 200,
  language: "spa",
}
const params = new URLSearchParams(searchParams)

export const searchByTitle = async (title) => {
  if (title.length === 0) throw Error("Title is required")

  try {
    const {
      data
    } = await apiOL.get(`search.json?title=${title}`, { params })
    console.log(data)

     return data.docs
      .filter((doc) => doc.cover_i)
       .map(({ title, author_name, cover_i, key, subject, publisher }) => ({
         title,
         author_name,
         cover_i,
         key,
         subject,
         publisher,
       }))
       .slice(0, 20)

   } catch (error) {
    console.log(error)
    throw Error(error)
  }
}