import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search; //this hook is used to extract  the query string from the CurrentURL
  //console.log(cat);//this is to test the extracted  query string
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts${cat}`); //cat in this case is a query string containing optional chain params eg: "?cat=food"
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]); // pass cat as a dependency to fetchData on every cat change event
  
  return (
    <div className="Home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={ post.img!==null?post.img:`upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`} className="link">
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
