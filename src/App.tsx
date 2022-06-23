import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./components/Router"
import { client } from "./lib/apollo"


function App() {

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default App
