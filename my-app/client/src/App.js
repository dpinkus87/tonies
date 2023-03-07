import React from 'react';
import {
 ApolloClient,
 InMemoryCache,
 createHttpLink,
 ApolloProvider, 
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';

const httpLink = createHttpLink({
  uri: 'graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      // eslint-disable-next-line no-template-curly-in-string
      authorization: token ? 'Bearer ${token}' : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div classname='flex-column justify-flex-start min-100-vh'>
          <Header />
            <Routes>
              <Route
              path="/"
              element={<Home />}
              />
              <Route 
                path="/login"
                element={<Login />}
              />
              <Route
              path="me"
              element={<Profile />}
              />
              <Route
              path="/profiles/profileID"
              element={<Profile />}
              />
            </Routes>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;