import React from 'react'
import axios from 'axios'
import { useState , useEffect, useMemo} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CharacterCard from './CharacterCard'
import Filter from './Filter';
import './container.scss'

const Container = () => {
  const [character, setCharacter] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {
      if (response.status === 200) {
        setCharacter(response.data.results)
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [setCharacter])

  const handleChange = (e) => {
    return setSearch(e.target.value)
  }

  const characters = useMemo(() => {
    return character.filter((element) => {
      if (element.name.toString().toLowerCase().includes(search.toLowerCase())) {
        return element
      }
    })
  }, [search, character])

  return (
    <Tabs>
      <TabList>
        <Tab>Characters</Tab>
        <Tab>Location</Tab>
        <Tab>Episode</Tab>
      </TabList>

      <Filter value={search} onChange={handleChange}/>

      <TabPanel>
        <main className='characters-container'>
          {characters.map((character,index) => {
            return (
              <CharacterCard
                gender={character.gender}
                image={character.image}
                key={character.id}
                name={character.name}
                species={character.species}
                status={character.status}
              />
            )
          })
          }
        </main>
      </TabPanel>
      <TabPanel>
        Location
      </TabPanel>
      <TabPanel>
        Episode
      </TabPanel>
    </Tabs>
  )
}

export default Container
