import React, {useState, useEffect} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import spellData from './data/spells'
import categoryData from './data/categories'
import SpellList from './components/SpellList'

const App = () => {
  const [spells, setSpells] = useState([])
  const [categories, setCategories] = useState([])
  useEffect(() => {
    setSpells(spellData)
    setCategories(categoryData)
  }, [])
  return (
    <div >
      <BrowserRouter>
        <h1>Spell Book</h1>
        {/* <SpellList spells={spells}/> */}
        <Route to="/" render={(props) => <SpellList {...props} spells={spells}/>} />
      </BrowserRouter>
          
    </div>
  )
}

export default App
