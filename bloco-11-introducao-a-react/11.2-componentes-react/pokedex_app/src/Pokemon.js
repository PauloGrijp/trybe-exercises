import React from 'react';


class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight: {value, measurementUnit}, image} = this.props.pokemonInfo

    return (
      <section>
        <p>Nome: {name}</p>
        <p>Tipo: {type}</p>
        <p>Peso: {value}{measurementUnit}</p>
        <img src={image} alt={name} />
      </section>
    );
  }
}

export default Pokemon;