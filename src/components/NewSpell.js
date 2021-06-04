import React, { useState } from 'react' 

const NewSpell = (props) => {
    const {categories, nextId, history} = props
    const initialFormState = {
        name: "",
        description: "",
        category: "death"
    }
    const [formState, setFormState] = useState(initialFormState)
    const handleChange = (event) => {
        setFormState(formState => {
            return {
                ...formState,
                [event.target.name]: event.target.value
            }
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const newSpell = {
            id: nextId,
            ...formState,
            date_modified: new Date()
        }
        console.log(newSpell)
        history.push("/")
    }
    const divStyles = {
        display: "grid",
        width: "100vw"
    }
    const inputStyles = {
        width: "70vw",
        margin: "0.5em"
    }
    const textAreaStyles = {
        height: "200px",
        margin: "0.5em",
        width: "70vw"
    }
    const labelStyles = {
        fontSize: "1.2em",
        
    }
    return (
        <div>
            <h2>Create a new spell</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={handleChange} value={formState.name}></input>
                </div>
                <div>
                    <label>Category:</label>
                    <select name="category" onChange={handleChange} value={formState.category}>
                        {categories.map(category => <option key={category.id} value={category.name}>{category.name}</option>)}
                    </select>
                </div>
                <div>
                    <label>Description:</label>
                    <textarea cols="30" rows="4" name="description" onChange={handleChange} value={formState.description}></textarea>
                </div>
                <button type="submit">Create Spell</button>
            </form>
        </div>
    )
}

export default NewSpell