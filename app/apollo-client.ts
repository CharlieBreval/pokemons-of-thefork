import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  console.log(process.env.hasura);
  const client = new ApolloClient({
    uri: "https://moved-anemone-67.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
      "x-hasura-admin-secret": process.env.hasura_admin_secret ?? '',
    },
  });

  return client;
};

export default createApolloClient;
