import { Header } from "./components/Header";
import GlobalStyle from "../src/styles/global";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
