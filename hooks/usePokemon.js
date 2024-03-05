import { useState, useEffect } from 'react';

const usePokemon = (prev, next) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataFetched, setDataFetched] = useState(false)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
        const data = await response.json();
        setPokemons(data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

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

  return { pokemons, loading, error, dataFetched, pokemonDetails };
};

export default usePokemon;
