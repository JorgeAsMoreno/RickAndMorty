import React from 'react'
import axios from 'axios'
import { useState , useEffect} from 'react'
import CharacterCard from './CharacterCard'
import './characters.scss'

const Characters = () => {
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
  )
}

export default Characters
