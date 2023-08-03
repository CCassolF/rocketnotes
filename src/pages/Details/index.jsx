import { Container } from "./styles.js"

export function Details() {
  return (
    <Container>
      <h1>Rocket Notes</h1>
      <span>Aplicações para salvar e gerenciar seus links úteis.</span>


      <h2>Faça seu login</h2>

      <section>
        <input type="email" placeholder="E-mail"/>
        <input type="password" placeholder="Senha"/>
      </section>

      <button>Entrar</button>

      <p>Criar conta</p>
    </Container>
  )
}
