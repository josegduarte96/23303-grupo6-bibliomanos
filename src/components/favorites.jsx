import { getFirebase } from "../firebase";
//Falta crear una funcion que traiga al usuario logueado y aca iria: import {getCurrentUser} from "./dondeloponga", lo correcto seria en algun lugar de auth

export const getFavorites = async() => {
    const result = {statusResponse: true, error: null, favorites: [] }
    try {
        const response = await db
        .colletion("/*nombre de coleccion*/")
        .where("idUser", "==", getCurrentUser().uid)
        .get()
    const booksId = []
    response.forEach((doc) => {
        const favorite = doc.data()
        booksId.push(favorite.bookId /*bookId es el nombre de la propiedad en la coleccion de firebase. Si se llama diferente, debe cambiarse*/)
    })
    await Promise.all(
        map(booksID, async(bookId))
            const response2 = await getDocumentById("/*nombre de coleccion*/", bookID)
            if (response2.statusResponse) {
                result.favorites.push(response2.document)
            }
    )
    } catch (error) {
        result.statusResponse = false
        result.error = error 
    }
    return result
}
