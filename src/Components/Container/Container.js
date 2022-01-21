import React from 'react'
import axios from 'axios'
import { useState , useEffect} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CharacterCard from './CharacterCard'
import './container.scss'

const Container = () => {
  const [character, setCharacter] = useState([])
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
  }, [])
  return (
    <Tabs>
      <TabList>
        <Tab>Characters</Tab>
        <Tab>Location</Tab>
        <Tab>Episode</Tab>
      </TabList>
      <TabPanel>
        <main className='characters-container'>
          {character.map((character,index) => {
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
