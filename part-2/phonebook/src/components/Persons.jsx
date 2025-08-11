const Persons = ({ persons, onDelete }) => {
    return (
        <div>
            {persons.map(({ id, name, phone }) => (
                <p key={id}>{name} {phone}
                    <button onClick={() => onDelete(id)}>delete</button>
                </p>
            ))
            }
        </div >
    )
}

export default Persons