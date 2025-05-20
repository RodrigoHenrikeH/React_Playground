import { useEffect, useState } from "react";

function Tarefa() {

  // Aqui você pode adicionar a lógica do seu componente
  // Por exemplo, você pode usar hooks como useState ou useEffect
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(()=>{
    if(completed){
      setTarefa('Parabéns! Você concluiu a Tarefa!');
    }else{
     setTarefa("Tarefa Incompleta");
    }

  },[completed]);

  return (
    <div>
      <h2>Componente Tarefa</h2>
      <h3>{tarefa}</h3>
      <p>Conclua a tarefa</p>
      <button onClick={()=> setCompleted(!completed)}>Concluir Tarefa</button>
    </div>
  )
}

export default Tarefa