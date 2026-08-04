import { Outlet } from "react-router-dom";

import {
  ApolloClient,
  inMemoryCache,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

import { setContext, SetContext } from "@apollo/client/link/context";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const httpLink = createHttpLink({
  URI: import .mata.env.VITE_GRAPH_URI,
});

const authlink = setContext((_, { headers}) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authlink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  

  return (
    <ApolloProvider client={client}>
      <div>
        <Outlet />
      </div>
    </ApolloProvider>
  )
}

export default App;
