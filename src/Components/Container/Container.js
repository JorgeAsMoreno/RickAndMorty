import React from 'react'
import axios from 'axios'
import { useState , useEffect, useMemo} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CharacterCard from './CharacterCard'
import Filter from './Filter';
import Location from './Location';
import Episodes from './Episodes';
import './container.scss'

const Container = () => {
  const [character, setCharacter] = useState([])
  const [location, setLocation] = useState([])
  const [episode, setEpisode] = useState([])
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

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location')
    .then(function (response) {
      if (response.status === 200) {
        setLocation(response.data.results)
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [setLocation])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode')
    .then(function (response) {
      console.log('episodes', response.data)
      if (response.status === 200) {
        setEpisode(response.data.results)
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [setEpisode])

  const handleChange = (e) => {
    console.log(e)
    setSearch(e.target.value)
  }

  const characters = useMemo(() => {
    return character.filter((element) => {
      if (element.name.toString().toLowerCase().includes(search.toLowerCase())) {
        return element
      }
    })
  }, [search, character])

  const locations = useMemo(() => {
    return location.filter((element) => {
      if (element.name.toString().toLowerCase().includes(search.toLowerCase())) {
        return element
      }
    })
  }, [search, location])

  const episodes = useMemo(() => {
    return episode.filter((element) => {
      if (element.name.toString().toLowerCase().includes(search.toLowerCase())) {
        return element
      }
    })
  }, [search, episode])

  return (
    <main className='main-continer'>
      <Tabs>
        <TabList>
          <Tab>Characters</Tab>
          <Tab>Location</Tab>
          <Tab>Episode</Tab>
        </TabList>

        <Filter value={search} onChange={handleChange}/>

        <TabPanel>
          <div className='characters-container'>
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
          </div>
        </TabPanel>
        <TabPanel>
          <div className='location-container'>
            {
              locations.map((location, i) => {
                return (
                  <Location
                    dimension={location.dimension}
                    key={location.id}
                    name={location.name}
                    residents={location.residents}
                    type={location.type}
                  />
                )
              })
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='episode-container'>
            {
              episodes.map((episode, i) => {
                return (
                  <Episodes
                    air_date={episode.air_date}
                    episode={episode.episode}
                    key={episode.id}
                    name={episode.name}
                  />
                )
              })
            }
          </div>
        </TabPanel>
      </Tabs>
    </main>
  )
}

export default Container
