import { useQuery, gql } from '@apollo/client';

const GET_POKEMONS = gql`
    query GetPokemons {
        pokemon {
            name
            pokemon_id
            pv
            type {
                name
            }
        }
    }
`;

export const PokemonList = () => {
    const { loading, error, data } = useQuery(GET_POKEMONS, {
    });

    if (loading) {
        return <div>loading...</div>
    }

    return <div>
        <pre>
            {JSON.stringify(data)}
        </pre>
    </div>
}