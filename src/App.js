import React, {useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// Data
import spellData from './data/spells'
import categoryData from './data/categories'
import getSpellFromId from './utils/get-spell'
// Components
import SpellList from './components/SpellList'
import NewSpell from './components/NewSpell'
import Nav from './components/Nav'
import Spell from './components/Spell'
import nextId from './utils/next-id'

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
         <h1>Super cool spell app</h1>
         
        <Switch>
          <Route 
            exact path="/" 
            render={() => <SpellList spells={spells} />} 
          />
          <Route 
              exact path="/spells/new" 
              render={(props) => <NewSpell {...props} categories={categories} nextId={nextId(spells)} />}
          />
          <Route 
              exact path="/spells/:id"
              render={(props) =>  <Spell {...props} spell={getSpellFromId(props.match.params.id, spells)}/>  } 
          />
      </Switch>
          
      </BrowserRouter>
    </div>
  )
}

export default App
