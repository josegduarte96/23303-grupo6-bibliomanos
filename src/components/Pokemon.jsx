import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
function Pokemon({ idPokemon }) {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    const urlPokeAPI = "https://pokeapi.co/api/v2/pokemon"

    fetch(`${urlPokeAPI}/${idPokemon}`)
      .then((res) => res.json())
      .then((res) => {
        //nombre pokemon
        let namePoke = res.name
        //foto de pokemon
        let fotoPoke = res.sprites.other.dream_world.front_default
        //Experiencia de pokemon
        let expPoke = res.base_experience
        let attack = res.stats[1].base_stat
        let special = res.stats[3].base_stat
        let defense = res.stats[2].base_stat
        setPokemon({
          namePoke,
          fotoPoke,
          expPoke,
          attack,
          special,
          defense,
        })
      })
      .catch(console.log)
  }, [])

  if (pokemon === null) return <div>Loading..</div>

  return (
    <>
      <div className="container d-flex justify-content-center p-4">
        <div className="card" style={{ width: "290px" }}>
          <img src={pokemon.fotoPoke} style={{ width: "100%", height: "300px" }} className="img-fluid" alt="..." />
          <div className="card-body border-top border-dark">
            <h5 className="card-title">{pokemon.namePoke}</h5>
            <p className="card-text">Ataque: {pokemon.attack}</p>
            <p className="card-text">Experiencia: {pokemon.expPoke}</p>
            <p className="card-text">Especial: {pokemon.special}</p>
            <p className="card-text">Defensa: {pokemon.defense}</p>
            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Pokemon
