import { useState } from "react";

function Contador() {

    const [valor, setValor] = useState(0);

    function handleClick() {
        setValor(valor + 1);
    }

    function handleClick2() {
        setValor(valor - 1);
    }

    return (
        <div>
            <h2>Componente Contador</h2>
            <p>O valor atual é: {valor}</p>
            <button onClick={handleClick2}>Diminuir 1</button>
            <button onClick={handleClick}>Aumentar 1</button>
            
        </div>
    )
}

export default Contador