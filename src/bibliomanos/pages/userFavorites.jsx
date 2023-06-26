import React, { useState, useCallBack, useEffect } from "react"   //mostramos los favoritos del usuario
import { getFavorites } from "../../components/favorites"

export default function Favorites() {

    useEffect(() =>{
        async function getData() {
            const response = await getFavorites()
            console.log(response)
        }
        getData()
        }, [])
    

    return (
        <div>
        <p className="h1">Mis próximas lecturas</p>
        </div>
    )
}
