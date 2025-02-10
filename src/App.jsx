import SighIn from "./components/SighIn"
import ForgotPassword from "./components/ForgotPassword";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  // const [loggedIn, setLogin] = useState(false);
  const [page, setPage] = useState(0);
  //page 0->login, 1-> forgotpassword, 2-> home page

  function handleForgotPass(){
    setPage(1);
  };

  function handleLogin(){
    setPage(2);
  };

  if(page===0){
    return (
      <SighIn onForgotPassword={handleForgotPass} onLogin={handleLogin}/>
    );
  }else if(page===1){
    return (
      <ForgotPassword/>
    );
  }else if(page===2){
    return (
      <Home />
    );
  }
}

export default App
