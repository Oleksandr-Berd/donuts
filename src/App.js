import "./App.css";
import Layout from "./Components/Layout/Layout";
import Header from "./Components/Header/Header";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <AboutUs/>
      </Layout>
    </div>
  );
}

export default App;
