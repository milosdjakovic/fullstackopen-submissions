import { useState } from 'react'

const PersonForm = ({ onSubmit }) => {
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }

    const handleAddPerson = (event) => {
        event.preventDefault()

        onSubmit({ newName, newPhone })

        setNewName('')
        setNewPhone('')
    }

    return (
        <form onSubmit={handleAddPerson}>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
                <br />
                phone: <input value={newPhone} onChange={handlePhoneChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm
