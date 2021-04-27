import React from 'react'
import Pokemon from './Pokemon'
import data from './data'

class Pokedex extends React.Component {
  render() {
    return (
      <setcion>
        {data.map(poke => <Pokemon pokemonInfo={poke}/>)}
      </setcion>
    )
  }
}

export default Pokedex