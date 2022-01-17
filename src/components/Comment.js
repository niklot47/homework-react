export default function Comment(props) {
    let {id, name, body} = props;
    return (
        <div className='Comment'>
            <h2>
                Comment: {name}
            </h2>
            <p>{body}</p>
        </div>
    )
}