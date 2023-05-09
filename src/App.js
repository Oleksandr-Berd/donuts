import { ToastContainer } from "react-toastify";

import "./App.css";
import Layout from "./Components/Layout/Layout";
import Header from "./Components/Header/Header";
import AboutUs from "./Components/AboutUs/AboutUs";
import Program from "./Components/Program/Program";
import Reviews from "./Components/Reviews/Reviews";
import { useState } from "react";
import ModalMenu from "./Components/ModalMenu/ModalMenu";
import Footer from "./Components/Footer/Footer";

function App() {
  const [showModalMenu, setShowModalMenu] = useState(false);

  const handleModalMenu = () => {
    setShowModalMenu(!showModalMenu);
  };

  return (
    <div className="App">
      <Layout>
        <ToastContainer autoClose={3000} />
        {showModalMenu && <ModalMenu toggleModal={handleModalMenu} />}
        <Header toggleModal={handleModalMenu} />
        <AboutUs />
        <Program />
        <Reviews />
        <Footer/>
      </Layout>
    </div>
  );
}

export default App;
