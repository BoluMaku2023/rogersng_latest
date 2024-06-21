import React, { useEffect, useState } from "react";
import Post from "../OtherComponents/Post";
import Wrapper from "./Blog.style.js";
// import illustration from "../assets/images/welcome.svg";
// import { Link } from "react-router-dom";
import { useGetLatestBlogMutation } from "../../slices/blogApiSlice.js";
// import Loader from "../components/Loading";
// import { Helmet } from "react-helmet";

const Landing = () => {
  const [posts, setPosts] = useState([]);
  const [blogs, { isLoading }] = useGetLatestBlogMutation();

  const getPosts = async () => {
    try {
      const response = await blogs().unwrap();
      setPosts(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <Wrapper>
      {/* {isLoading && <Loader text="Abeg clam down, we dey load post" />} */}

      <section className="posts">
        <div className="headerText">
          Popular posts <div></div>
        </div>
        {posts.map((post) => {
          const { title, content, _id, image, created, postedBy } = post;
          return (
            <Post
              title={title}
              content={content}
              image={image.url}
              date={created}
              postedBy={postedBy}
              key={_id}
            />
          );
        })}
      </section>
    </Wrapper>
  );
};

export default Landing;
