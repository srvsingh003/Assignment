import "./App.css";
import Footer from "./Components/Footer/Footer";

import Header from "./Components/Header/Header";
import Navbar from "./Components/Nav/NavBar";
import Product from "./Components/productDisplay/Product";
import Detail from "./Components/productDisplay/Detail";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <Detail />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
