import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4q3c9nk2tov01xs0l8s05vu/master',
    cache: new InMemoryCache(),
});