import {useEffect, useState} from "react";
import {fetchAllPokemons} from "../helpers/fetchAllPokemons";

export const usePokemon = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    // Carga de los pokemons
    fetchAllPokemons();
  })

  return isLoading;
};
