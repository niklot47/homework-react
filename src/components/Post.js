export default function Post(props) {
    let {id, title, body} = props;
    return (
        <div className='Post'>
            <h2>
                {title}
            </h2>
            <p>{body}</p>
        </div>
    )
}