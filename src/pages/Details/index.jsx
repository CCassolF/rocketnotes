import { Button } from "../../components/Button/index.jsx"
import { Container } from "./styles.js"

export function Details() {
  return (
    <Container>
      <h1>Rocket Notes</h1>
      <span>Aplicações para salvar e gerenciar seus links úteis.</span>

      <Button title="Login" loading />
      <Button title="cadastrar" />
      <Button title="Voltar" />
    </Container>
  )
}
