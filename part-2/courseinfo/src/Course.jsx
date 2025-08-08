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
            <Part name={course.parts[0].name} exercises={course.parts[0].exercises} />
            <Part name={course.parts[1].name} exercises={course.parts[1].exercises} />
            <Part name={course.parts[2].name} exercises={course.parts[2].exercises} />
        </div>
    )
}

export default Course;