import Head from "./Components/Layout/Head";
import Title from "./Components/Layout/Title";
import logo from "./logo.svg";
import Body from "./Components/Layout/Body";
import Portal from "./Components/Portal/Portal";
import { useState } from "react";

function App() {



  const [cartOpen,setCartOpen]=useState(false)

  const openCart=()=>{
    setCartOpen(true)
  }

  const closeCart=()=>{
    setCartOpen(false)
  }
 
  return (
    <>
    <Head openCart={openCart}/>
    {cartOpen && <Portal closeCart={closeCart} />}
    <Body/>
    </>
  );
}

export default App;
