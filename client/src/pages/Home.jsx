import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import service from "../img/service.png"
const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search; //this hook is used to extract  the query string from the CurrentURL
  //console.log(cat);//this is to test the extracted  query string

  const description = "The collaboration between Honda and GM, alongside Toyota’s backing for hydrogen technology and retrofitting gas engines for hydrogen use, raises doubts about electric vehicle (EV) viability. Despite available conversion kits, reliability issues hinder gas-to-hydrogen adoption, contrasting EVs' more dependable performance. Toyota's hydrogen engine offers reliability but lacks fuel cell performance. Both face a common hurdle: the lack of hydrogen infrastructure and costly generators. EVs benefit from a robust charging network, surpassing hydrogen stations by far. Home hydrogen fueling is impractical due to high costs and complexity. Tesla's success highlights EV charging accessibility. Building a hydrogen infrastructure faces immense costs and challenges. Commercial hydrogen vehicles may work, but consumer adoption is doubtful. Battery technology advancements make hydrogen's switch unfeasible now. The future favors EVs due to infrastructure, cost, and technological advancements."
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
              <img
                src={post.img !== null ? post.img : `upload/${post.img}`}
                alt=""
              />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`} className="link">
                <h1>{post.title}</h1>
              </Link>
              <p>
               {description.slice(0,150)}...
              </p>
              <div className="btn"><button>Read More</button></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
