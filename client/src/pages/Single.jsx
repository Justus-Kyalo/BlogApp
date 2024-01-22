import React from "react";
import editIcon from "../img/edit.png";
import deleteIcon from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";


const Single = () => {
  return (
    <div className="Single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={editIcon} alt="" />
            </Link>
            <img src={deleteIcon} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Voluptatibus odit placeat iste, error accusamus laborum repudiandae a,
          eius voluptatum magni quisquam nemo dolores. Molestiae delectus ad
          excepturi reprehenderit non officiis. Lorem ipsum dolor sit amet.
          Lorem ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolor laudantium deserunt dicta quae similique nemo, ipsa
          ducimus delectus laboriosam eius fugit assumenda eligendi. Accusantium
          natus aliquam maxime reiciendis sit culpa. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Quidem, voluptatem recusandae maxime
          iste voluptates quibusdam consequuntur a nihil nemo maiores dolorem
          veniam tenetur, natus aliquid assumenda enim deserunt dolores ducimus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum neque
          dolores amet odit reiciendis eum, temporibus sunt modi, at tempora
          deleniti quisquam veniam! Neque nulla, soluta quae recusandae adipisci
          voluptate? ipsum dolor sit amet consectetur adipis. Lorem ipsum dolor
          sit amet.
          Lorem ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolor laudantium deserunt dicta quae similique nemo, ipsa
          ducimus delectus laboriosam eius fugit assumenda eligendi. Accusantium
          natus aliquam maxime reiciendis sit culpa. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Quidem, voluptatem recusandae maxime
          iste voluptates quibusdam consequuntur a nihil nemo maiores dolorem
          veniam tenetur, natus aliquid assumenda enim deserunt dolores ducimus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum neque
          dolores amet odit reiciendis eum, temporibus sunt modi, at tempora
          deleniti quisquam veniam! Neque nulla, soluta quae recusandae adipisci
          voluptate? ipsum dolor sit amet consectetur adipis. Lorem ipsum dolor
          sit amet.
          Lorem ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolor laudantium deserunt dicta quae similique nemo, ipsa
          ducimus delectus laboriosam eius fugit assumenda eligendi. Accusantium
          natus aliquam maxime reiciendis sit culpa. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Quidem, voluptatem recusandae maxime
          iste voluptates quibusdam consequuntur a nihil nemo maiores dolorem
          veniam tenetur, natus aliquid assumenda enim deserunt dolores ducimus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum neque
          dolores amet odit reiciendis eum, temporibus sunt modi, at tempora
          deleniti quisquam veniam! Neque nulla, soluta quae recusandae adipisci
          voluptate? ipsum dolor sit amet consectetur adipis. Lorem ipsum dolor
          sit amet.
        </p>
      </div>
     <Menu/>
    </div>
  );
};

export default Single;
