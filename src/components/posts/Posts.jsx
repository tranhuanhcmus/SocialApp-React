import React from "react";
import "./posts.scss";
import Post from "./../Post/Post";
const posts = [
  {
    id: 1,
    userId: 1,
    name: "Naruto",
    profilePic:
      "https://genk.mediacdn.vn/2019/2/22/photo-1-1550801768757434731492.png",
    img: "https://vtv1.mediacdn.vn/zoom/700_438/2021/12/16/the-batman-robert-pattinson-1639625645747107315342-crop-1646634320419993412602.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iste explicabo iure et dicta accusantium nemo quam minima expedita illum, fugiat laudantium rem incidunt nostrum repellendus ipsam. Suscipit, laborum quae?",
  },
  {
    id: 2,
    userId: 2,
    name: "Naruto",
    profilePic:
      "https://genk.mediacdn.vn/2019/2/22/photo-1-1550801768757434731492.png",
    img: "https://vtv1.mediacdn.vn/zoom/700_438/2021/12/16/the-batman-robert-pattinson-1639625645747107315342-crop-1646634320419993412602.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iste explicabo iure et dicta accusantium nemo quam minima expedita illum, fugiat laudantium rem incidunt nostrum repellendus ipsam. Suscipit, laborum quae?",
  },
  {
    id: 3,
    userId: 3,
    name: "Naruto",
    profilePic:
      "https://genk.mediacdn.vn/2019/2/22/photo-1-1550801768757434731492.png",
    img: "https://vtv1.mediacdn.vn/zoom/700_438/2021/12/16/the-batman-robert-pattinson-1639625645747107315342-crop-1646634320419993412602.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iste explicabo iure et dicta accusantium nemo quam minima expedita illum, fugiat laudantium rem incidunt nostrum repellendus ipsam. Suscipit, laborum quae?",
  },
  {
    id: 4,
    userId: 4,
    name: "Naruto",
    profilePic:
      "https://genk.mediacdn.vn/2019/2/22/photo-1-1550801768757434731492.png",
    img: "https://vtv1.mediacdn.vn/zoom/700_438/2021/12/16/the-batman-robert-pattinson-1639625645747107315342-crop-1646634320419993412602.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iste explicabo iure et dicta accusantium nemo quam minima expedita illum, fugiat laudantium rem incidunt nostrum repellendus ipsam. Suscipit, laborum quae?",
  },
];
const Posts = () => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
