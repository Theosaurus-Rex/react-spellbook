import React from 'react'
import {Link} from 'react-router-dom'

const Spell = (props) => {
    const {spell} = props 
    if(!spell) return <p>Spell not found</p>
    return (
        <div>
            <h2><Link to={`/spells/${spell.id}`}>{spell.name}</Link></h2>
            <h3>{spell.category}</h3>
            <p>{spell.date_modified.toLocaleString()}</p>
            <p>{spell.description}</p>
        </div>
    )
}

export default Spell