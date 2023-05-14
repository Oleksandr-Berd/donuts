import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Layout from "./Components/Layout/Layout";
import Header from "./Components/Header/Header";
import AboutUs from "./Components/AboutUs/AboutUs";
import Program from "./Components/Program/Program";
import Reviews from "./Components/Reviews/Reviews";
import { useState } from "react";
import ModalMenu from "./Components/ModalMenu/ModalMenu";
import Footer from "./Components/Footer/Footer";
import HeaderLayout from "./Components/HeaderLayout/HeaderLayout";
import FooterLayout from "./Components/FooterLayout/FooterLayout";

function App() {
  const [showModalMenu, setShowModalMenu] = useState(false);

  const handleModalMenu = () => {
    setShowModalMenu(!showModalMenu);
  };

  return (
    <div className="App">
      <HeaderLayout>
        <Layout>
          <Header toggleModal={handleModalMenu} />
          <AboutUs />
        </Layout>
      </HeaderLayout>
      <Layout>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          passive={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {showModalMenu && <ModalMenu toggleModal={handleModalMenu} />}
        <Program />
      </Layout>
      <FooterLayout>
        <Layout>
          <Reviews />
        </Layout>
        <Footer />
      </FooterLayout>
    </div>
  );
}

export default App;
