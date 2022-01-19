import {useState} from "react";

import './App.css';
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import {postService} from "./services/post.service";

function App() {

    let [user, setUser] = useState(null);
    let [id, setId] = useState(null);
    let [posts, setPosts] = useState([]);
    
    const getUser = (user) => {
        setUser(user);
    }

    const getId = (id) => {
      postService.getByUser(id).then(value => setPosts([...value]))
    }

    return (
        <div>
            <div className="header">
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getId={getId}/>}
            </div>
            <Posts posts={posts}/>
        </div>
    );
}

export default App;
