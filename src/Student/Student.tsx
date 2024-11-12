import stylesStudent from './Student.module.css'

function Student({ name = "Empty", age = 0, isStudent = false }: StudentProps) {
    return (
        <div className={stylesStudent["student"]}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

type StudentProps = {
    name?: string;
    age?: number;
    isStudent?: boolean;
}

export default Student