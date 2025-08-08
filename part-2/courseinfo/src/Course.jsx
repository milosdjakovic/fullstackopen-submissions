const Header = ({ course }) => {
    return (
        <h1>{course}</h1>
    )
}

const Part = ({ name, exercises }) => {
    return (
        <p>
            {name} {exercises}
        </p>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            {course.parts.map(part => (
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            ))}
        </div>
    )
}

export default Course;