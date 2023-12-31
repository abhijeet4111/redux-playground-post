import { useState, useEffect } from "react";
import { PostCard } from "../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addPost,
  editPost,
  editPostInput,
  getInitialData,
} from "../store/postSlice";

const PostPage = () => {
  const postCard = useSelector((data) => data.posts.postArr);
  const [updateBtn, setUpdateBtn] = useState(true);
  const [inputChange, setInputChange] = useState();
  const [newPostCard, setNewPostCard] = useState(postCard);

  const disPatch = useDispatch();

  const addPostHandler = () => {
    let newPost = {
      caption: inputChange,
      likes: 0,
      postId: uuidv4(),
    };
    disPatch(addPost(newPost));
  };
  const updatePostHandler = () => {
    disPatch(editPostInput(inputChange));
  };

  return (
    <div className="pageLayout">
      <div>
        {postCard.map((data) => (
          <div key={data.postId}>
            <PostCard
              setUpdateBtn={setUpdateBtn}
              setInputChange={setInputChange}
              data={data}
            />
          </div>
        ))}
      </div>
      <div>
        <div>
          <input
            value={inputChange}
            onChange={(e) => setInputChange(e.target.value)}
          />
        </div>
        {updateBtn === true ? (
          <button onClick={() => addPostHandler()}>Add post</button>
        ) : (
          <button onClick={() => updatePostHandler()}>Update Post</button>
        )}
      </div>
    </div>
  );
};
export { PostPage };
