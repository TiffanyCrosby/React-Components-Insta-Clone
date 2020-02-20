//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from '../../dummy-data'

const PostsPage = () => {
  // set up state for your data
  // const [posts, setPosts] = useState({}); --- in this project you can get away with not setting up state but 
  //when pulling from API you have to wait for info and code will break if state is not set up.

  return (
    <div className="posts-container-wrapper">
      {dummyData.map((post/*post is the object I am pulling the data from also known as, in this case dummyData */, index) =>
        (<Post key={index} post={post} />))
        //instead of post ={post, which equals the WHOLE array}...just pull the specific things you need...
        // image = {post.image}, url = {post.url}, etc...
      };
    </div>
  );
};

export default PostsPage;

