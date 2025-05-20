import { useState } from "react";
import Home from "../home/Home";

function Login() {

  const[isLogged, setIsLogged] = useState(false);

  return (
    <>

    {isLogged? (<Home titulo="teste" texto="mais um texto de teste"/>) : (<div>
        <h2>Componente Login</h2>
        <button onClick={() => setIsLogged(true)}>Entrar</button>
        </div>
        )}


    </>
  )
}

export default Login