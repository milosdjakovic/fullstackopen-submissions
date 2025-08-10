const PersonForm = ({ newName, newPhone, handleNameChange, handlePhoneChange, handleAddPerson }) => {
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
