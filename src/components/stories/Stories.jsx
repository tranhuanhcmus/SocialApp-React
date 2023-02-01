import React, { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "./../../context/authContext";

const stories = [
  {
    id: 1,
    name: "Naruto",
    img: "https://genk.mediacdn.vn/2019/2/22/photo-1-1550801768757434731492.png",
  },
  {
    id: 2,
    name: "Naruto",
    img: "https://genk.mediacdn.vn/2019/2/22/photo-1-1550801768757434731492.png",
  },
  {
    id: 3,
    name: "Naruto",
    img: "https://genk.mediacdn.vn/2019/2/22/photo-1-1550801768757434731492.png",
  },
  {
    id: 4,
    name: "Naruto",
    img: "https://genk.mediacdn.vn/2019/2/22/photo-1-1550801768757434731492.png",
  },
];

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>

      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
