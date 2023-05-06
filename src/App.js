import "./App.css";
import Layout from "./Components/Layout/Layout";
import Header from "./Components/Header/Header";
import AboutUs from "./Components/AboutUs/AboutUs";
import Program from "./Components/Program/Program";
import Reviews from "./Components/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <AboutUs />
        <Program />
        <Reviews/>
      </Layout>
    </div>
  );
}

export default App;
