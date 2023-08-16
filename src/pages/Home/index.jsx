import { FiPlus } from 'react-icons/fi'
import { Brand, Container, Content, Menu, NewNote, Search } from './styles'

import { useEffect, useState } from 'react'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { Section } from '../../components/Section'

import { api } from '../../services/api'

export function Home() {
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])

  function handleTagsSelected(tagName) {
    const alreadySelected = tagsSelected.includes(tagName)
    
    if(alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)
      
    } else {
      setTagsSelected(prevState => [...prevState, tagName])
    }
    
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }

    fetchTags()
  },[])

  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />
      
      <Menu>
        <li>
          <ButtonText 
            title="Todos" 
            onClick={() => handleTagsSelected("all")}
            isActive={tagsSelected.length === 0} 
          />
        </li>
        {
          tags && tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText 
                title={tag.name} 
                onClick={() => handleTagsSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)} 
              />
            </li>
          ))
        }
        
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{ 
            title: 'React', 
            tags:[
              { id: '1', name: 'react'},
              { id: '2', name: 'rocketseat'}
            ] 
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}