import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import Details from './component/details'

// Axios url ('https://jsonplaceholder.typicode.com/posts?userId=')
const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

const App = () => {
  const [allPost, setAllPost] = useState([]);
  const [search, setSearch] = useState("");

    useEffect(() =>  {
      Axios.get(baseUrl).then((res) => {
        setAllPost(res.data)
      })
    }, [])

    // handleDelete button
    const handleDelete = (id) =>{
      const deleteBtn = allPost.filter(post => post.id !== id);
      setAllPost(deleteBtn);
    }

  // search compatibility
  const searchFilter = allPost.filter((list) => {
  return list.title.toLowerCase().includes(search.toLowerCase());
  }
  )

  return (
    <div className="App">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L60,186.7C120,181,240,171,360,170.7C480,171,600,181,720,154.7C840,128,960,64,1080,74.7C1200,85,1320,171,1380,213.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
          <h1>All posts display</h1>
          <div className="post">
            <input type="text" placeholder="Search for posts" onChange={(e) => setSearch(e.target.value)}/>
          </div>
          {searchFilter.map((list) => (
            <div key={list.id}>
              <Details title={list.title} body={list.body}/>
              <button onClick={() => handleDelete(list.id)} className="btn">Delete</button>
              <button className="Addbtn">Add</button>
          </div>
         ))}

    </div>
  );
}

export default App;
