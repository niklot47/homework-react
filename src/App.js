import {useEffect, useState} from "react";

import './App.css';
import User from "./components/User";
import Post from "./components/Post";
import Comment from "./components/Comment";

function App() {
    let [users, setUsers] = useState([]);
    let [posts, setPosts] = useState([]);
    let [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value);
            })

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value);
            })
    }, [])

    return (
        <div className="App">
            <div className='top'>
                <ul>
                    {
                        users.map(value => <User key={value.id} id={value.id} name={value.name}/>)
                    }
                </ul>

                <div className='Posts'>
                    {
                        posts.map(value => <Post key={value.id} title={value.title} body={value.body}/>)
                    }
                </div>
            </div>

            <div className='Comments'>
                {
                    comments.map(value => <Comment key={value.id} name={value.name} body={value.body}/>)
                }
            </div>
        </div>
    );
}

export default App;
