import { GraphQLClient } from "graphql-request";

const url = "https://ozoirlaferriere.stepzen.net/api/veering-bee/__graphql";

// https://ozoirlaferriere.stepzen.net/api/api/veering-bee    api/veering-bee

const apikey = process.env.EXPO_PUBLIC_GRAPHQL_API_KEY;

export const client = new GraphQLClient(url, {
  headers: {
    Authorization: `Apikey ${apikey}`,
  },
});
