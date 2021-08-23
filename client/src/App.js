import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/Nav';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  // call istokenexpired in a if statement
  //Auth.isTokenExpired();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
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
        <Nav></Nav>
    </ApolloProvider>
  );
}

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <Nav />
//         <Switch>
//           <Route exact path='/login' component={Login} />
//           <Route exact path="/signup" component={Signup} />
//         </Switch>
//       </Router>
//     </ApolloProvider>
//   );
// }

export default App;
