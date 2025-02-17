import React from "react";
import { useState } from "react";

const Likes = () => {
  const [reactions, setreactions] = useState({
    likes: 0,
    dislikes: 0,
  });
  const [history, sethistory] = useState([]);
  console.log(history);
  let Handlelikes = () => {
    setreactions({ ...reactions, likes: reactions.likes + 1 });
    sethistory([...history, "L"]);
  };
  let Handledislikes = () => {
    setreactions({ ...reactions, dislikes: reactions.dislikes + 1 });
    sethistory([...history, "D"]);
  };

  return (
    <div>
      <button onClick={Handlelikes}>
        <span className="material-symbols-outlined">thumb_up</span>
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={Handledislikes}>
        <span className="material-symbols-outlined">thumb_down</span>
      </button>
      <div>
        <p className="text-green-500">Likes: {reactions.likes}</p>
        <p className="text-red-500">Dislikes: {reactions.dislikes}</p>
      </div>
    </div>
  );
};
export default Likes;
