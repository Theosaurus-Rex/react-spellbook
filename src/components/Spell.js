import React from 'react'

const Spell = (props) => {
    const {spell} = props 
    if(!spell) return <p>Spell not found</p>
    return (
        <div>
            <h2>{spell.name}</h2>
            <h3>{spell.category}</h3>
            <p>{spell.date_modified.toLocaleString()}</p>
            <p>{spell.description}</p>
        </div>
    )
}

export default Spell