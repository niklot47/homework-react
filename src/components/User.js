export default function User(props) {
    let {id, name} = props;
    return (
        <>
            <li>
                {name}
            </li>
        </>
    )
}