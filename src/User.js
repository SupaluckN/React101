export const User = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p style={{color: "blue"}}>{props.position}</p>
        </div>
    )
}