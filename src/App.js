import React, {useState, useEffect} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
// Data
import spellData from './data/spells'
import categoryData from './data/categories'
import getSpellFromId from './utils/get-spell'
// Components
import SpellList from './components/SpellList'
import NewSpell from './components/NewSpell'
import Nav from './components/Nav'
import Spell from './components/Spell'

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
      <Nav />
        <h1>Spell Book</h1>
        {/* <SpellList spells={spells}/> */}
        <Route exact path="/" render={(props) => <SpellList {...props} spells={spells}/>} />
        <Route exact path="/spells/new" component={NewSpell} />
        <Route exact path="/spells/:id" render={(props) => <Spell {...props} spell={getSpellFromId(props.match.params.id, spells)}/>} />
      </BrowserRouter>
          
    </div>
  )
}

export default App
