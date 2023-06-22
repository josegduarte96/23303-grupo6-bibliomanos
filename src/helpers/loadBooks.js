import apiOL from "../api/apiService"

export const loadBooks = async (subject) => {
  if (subject.length === 0) throw Error("Subject is required")

  try {
    const {
      data: { docs },
    } = await apiOL.get(`search.json?subject=${subject}`)

    return docs
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
