import { useState, useEffect } from 'react';

const usePokemon = (offset) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataFetched, setDataFetched] = useState(false)

  useEffect(() => {
    const fetchPokemons = async () => {
      setDataFetched(false)
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`);
        const data = await response.json();
        setPokemons(data.results);
        setPokemonDetails({})
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [offset]);

  const fetchPokemonDetails = async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()

      setPokemonDetails((prevDetails) => ({
        ...prevDetails,
        [url]: data,
      }));
    } catch (error) {
      setError(error)
      console.error(`Error fetching details for Pokemon with id: ${id}`, error)
    }
  }

  useEffect(() => {
    if (!loading) {
      pokemons.forEach((pokemon) => {
        fetchPokemonDetails(pokemon.url)
      })
      setDataFetched(true)
    }
  }, [loading, pokemons])

  const pokemonArray = Object.values(pokemonDetails).sort((a, b) => a.id - b.id)

  return { pokemons, loading, error, dataFetched, pokemonArray };
};

export default usePokemon;
