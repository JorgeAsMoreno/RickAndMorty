import React from 'react'
import axios from 'axios'
import { useState , useEffect} from 'react'

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
    <main>
      {character.map((e,i) => {
        
      })
      }
    </main>
  )
}

export default Characters