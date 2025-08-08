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

const Total = ({ parts }) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <p>
            <strong>Total of {totalExercises} exercises</strong>
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
            <Total parts={course.parts} />
        </div>
    )
}

export default Course;