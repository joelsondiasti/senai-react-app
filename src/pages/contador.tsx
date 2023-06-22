import { Container } from "@/styles/contadorEstilo";
import { useState } from "react";

export default function Contador() {
  const [valor, setValor] = useState(100);

  return (
    <Container>
      <h1>{valor}</h1>
      <button onMouseOver={() => setValor(valor + 1)}>Incrementar</button>
    </Container>
  );
}
