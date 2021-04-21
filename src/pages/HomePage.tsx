import {usePokemon} from "../hooks/usePokemon";
import {Loading} from "../components/Loading";
import {Pokemon} from "../interfaces/fetchAllPokemonResponse";
import {useState} from "react";

export const HomePage = () => {

    const {isLoading, pokemons} = usePokemon();
    const [ currentPage, setCurrentPage ] = useState(0)
    const [ search, setSearch ] = useState('')

    const filteredPokemons = (): Pokemon[] => {
        return  pokemons.slice(currentPage, currentPage + 5)
    }

    const nextPage = () => {
        setCurrentPage( currentPage + 5)
    }
    const previousPage = () => {
        if (currentPage > 0)
            setCurrentPage( currentPage - 5)
    }

  return (
    <div className="mt-5">

      <h1>Listado de Pokémoms</h1>
      <hr />

      <input 
        type="text" 
        className="mb-5 form-control"
        placeholder="Buscar Pokémom"
      />

      <table className="table">
        <thead>
          <tr>
            <th style={{ width: 100 }}>ID</th>
            <th style={{ width: 150 }}>Nombre</th>
            <th>Imagen</th>
          </tr>
        </thead>
          <tbody>
          {
              filteredPokemons().map( ({ id, name, pic }) => (
                  <tr key={ id }>
                      <td> { id } </td>
                      <td> { name } </td>
                      <td>
                        <img
                          src={ pic }
                          alt={ name }
                          style={{height: 75}}
                        />
                      </td>
                  </tr>
              ))
          }

          </tbody>
      </table>

        <button 
            className="btn btn-primary"
            onClick={ previousPage }    
        >
            Anteriores
        </button>
        &nbsp;
        <button
            className="btn btn-primary"
            onClick={ nextPage }
        >
            Siguientes
        </button>


        {
            isLoading && <Loading />
        }

    </div>
  );
};
