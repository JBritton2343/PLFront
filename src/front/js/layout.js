import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./component/login";
import { Signup } from "./component/signup";
import { Power } from "./component/products/power";
import { Memory } from "./component/products/memory";
import { Cases } from "./component/products/cases";
import { Casefans } from "./component/products/casefans";
import { CPUFans } from "./component/products/cpufans";
import { Keyboards } from "./component/products/keyboards";
import { Mice } from "./component/products/mice";
import { Motherboards } from "./component/products/motherboards";
import { Processors } from "./component/products/processors";
import { Storage } from "./component/products/storage";
import { Videocards } from "./component/products/videocards";
import { CartProvider } from "react-use-cart";
import  PayAccpeted  from "./pages/payAccepted";
import Cart from "./component/cart"
import { Jumbotron } from "./component/jumbo";
import { SinglePower } from "./pages/singlePower";
import { SingleCase } from "./pages/singleCase";
import { SingleCasefan } from "./pages/singleCasefan";
import { SingleCPUFan } from "./pages/singleCPUFan";
import { SingleKeyboard } from "./pages/singleKeyboard";
import { SingleMemory } from "./pages/singleMemory";
import { SingleMotherboard } from "./pages/singleMotherboard";
import { SingleMouse } from "./pages/singleMouse";
import { SingleProcessor } from "./pages/singleProcessor";
import { SingleStorage } from "./pages/singleStorage";
import { SingleVideoCard } from "./pages/singleVideoCard";
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
      <CartProvider>
        <ScrollToTop>
          
          <Navbar />
          <Jumbotron />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Power />} path="/power" />
            <Route element={<Memory />} path="/memory" />
            <Route element={<Cases />} path="/cases" />
            <Route element={<Casefans />} path="/casefans" />
            <Route element={<CPUFans />} path="/cpufans" />
            <Route element={<Keyboards />} path="/keyboards" />
            <Route element={<Mice />} path="/mice" />
            <Route element={<Motherboards />} path="/motherboards" />
            <Route element={<Processors />} path="/processors" />
            <Route element={<Storage />} path="/storage" />
            <Route element={<Videocards />} path="/videocards" />
            <Route element={<Cart />} path="/cart" />
            <Route element={<SinglePower/>} path="/power/:id" />
            <Route element={<SingleCase/>} path="/cases/:id" />
            <Route element={<SingleCasefan/>} path="/casefans/:id" />
            <Route element={<SingleCPUFan />} path="/cpufans/:id" />
            <Route element={<SingleKeyboard/>} path="/keyboards/:id" />
            <Route element={<SingleMouse/>} path="/mice/:id" />
            <Route element={<SingleMotherboard/>} path="/motherboards/:id" />
            <Route element={<SingleProcessor/>} path="/processors/:id" />
            <Route element={<SingleStorage/>} path="/storage/:id" />
            <Route element={<SingleMemory/>} path="/memory/:id" />
            <Route element={<SingleVideoCard/>} path="/videocards/:id" />
            <Route element={<PayAccpeted/>} path="/payaccepted" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
          
        </ScrollToTop>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
