const Persons = ({ persons }) => {
    return (
        <div>
            {persons.map(({ name, phone }) => (
                <p key={name}>{name} {phone}</p>
            ))}
        </div>
    )
}

export default Persons