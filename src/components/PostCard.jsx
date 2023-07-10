import { useDispatch } from "react-redux";
import { addLikes } from "../store/postSlice";
import { deletePost } from "../store/postSlice";
import { editPost } from "../store/postSlice";
const PostCard = ({ data, setInputChange, setUpdateBtn }) => {
  const disPatch = useDispatch();
  const addLikeBtnHandler = (data) => {
    disPatch(addLikes(data.postId));
  };
  const deleteBtnHandler = (data) => {
    disPatch(deletePost(data.postId));
  };
  const editPostHandler = (data) => {
    setUpdateBtn(false);
    setInputChange(data.caption);
    disPatch(editPost(data));
  };

  return (
    <div className="postCard">
      <p>{data.caption}</p>
      <p>{data.likes}</p>
      <button onClick={() => addLikeBtnHandler(data)}>Add Likes</button>
      <button onClick={() => deleteBtnHandler(data)}>Delete post</button>
      <button onClick={() => editPostHandler(data)}>Edit post</button>
    </div>
  );
};
export { PostCard };
