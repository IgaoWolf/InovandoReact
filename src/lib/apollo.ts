import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pmcuq21vy401xx803kap84/master',
    cache: new InMemoryCache()
})