import "./App.css";
import Layout from "./Components/Layout/Layout";
import Header from "./Components/Header/Header";
import AboutUs from "./Components/AboutUs/AboutUs";
import Program from "./Components/Program/Program";
import Reviews from "./Components/Reviews/Reviews";
import { useState } from "react";
import ModalMenu from "./Components/ModalMenu/ModalMenu";

function App() {
  const [showModalMenu, setShowModalMenu] = useState(false);

  const handleModalMenu = () => {
    setShowModalMenu(!showModalMenu);
  };

  return (
    <div className="App">
      <Layout>
        {showModalMenu && <ModalMenu toggleModal={handleModalMenu} />}
        <Header toggleModal={handleModalMenu} />
        <AboutUs />
        <Program />
        <Reviews />ƒ
      </Layout>
    </div>
  );
}

export default App;
