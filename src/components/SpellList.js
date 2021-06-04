import React from 'react'
import Spell from './Spell'

const SpellList = (props) => {
    const {spells} = props
    return (
        <div>
            {spells.sort((a, b) => a.name[0] - b.name[0]).map(spell => {
                return <Spell key={spell.id} spell={spell}/>
            })}
        </div>
    )
}

export default SpellList