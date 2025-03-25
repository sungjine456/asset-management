import React from "react";
import "./App.css";
import Routes from "./routes/Routes";
import "./styles/Common.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes />
      </div>
    </QueryClientProvider>
  );
}

export default App;
