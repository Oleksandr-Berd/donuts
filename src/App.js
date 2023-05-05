import "./App.css";
import Layout from "./Components/Layout/Layout";
import Header from "./Components/Header/Header";
import AboutUs from "./Components/AboutUs/AboutUs";
import Program from "./Components/Program/Program";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <AboutUs />
        <Program/>
      </Layout>
    </div>
  );
}

export default App;
