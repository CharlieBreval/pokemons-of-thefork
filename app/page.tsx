'use client'
import { ApolloProvider } from "@apollo/client";
import { PokemonList } from "./components/PokemonList";
import createApolloClient from "./apollo-client";

export default function Home() {
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <PokemonList />
      </main>
    </ApolloProvider>
  );
}
