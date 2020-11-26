import React, {useState, useEffect} from 'react';
import HomeStack from './src/navigation/HomeStack';
import {NavigationContainer} from '@react-navigation/native';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from '@apollo/client';
import {GITHUB_TOKEN} from '@env';
import {setContext} from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, {headers}) => {
  console.log('setContex' + GITHUB_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  console.log(GITHUB_TOKEN);
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
