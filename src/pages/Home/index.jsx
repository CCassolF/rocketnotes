import { Brand, Container, Content, Menu, NewNote, Search } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />
      
      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Nodejs" />
        </li>
      </Menu>

      <Search>

      </Search>

      <Content>

      </Content>

      <NewNote>

      </NewNote>
    </Container>
  )
}