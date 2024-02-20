import React, { useContext, useEffect, useState } from "react";
import editIcon from "../img/edit.png";
import deleteIcon from "../img/delete.png";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/AuthContext";

const Single = () => {
  const { currentUser } = useContext(AuthContext);
  const [post, setPost] = useState([]);

  const navigate = useNavigate();

  // const id = useLocation().pathname.split("/")[2];
  const { id } = useParams(); //this hook is more simpler than the above in getting the id of the post from the url

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/api/posts/${id}`);
      setPost(res.data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts/${id}`);
        setPost(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div className="Single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post?.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=${post.id}`} state={post}>
                <img src={editIcon} alt="" />
              </Link>
              <img onClick={handleDelete} src={deleteIcon} alt="" />
            </div>
          )}
        </div>
        <h1>{post?.title}</h1>
        <p>{post?.desc}</p>
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
