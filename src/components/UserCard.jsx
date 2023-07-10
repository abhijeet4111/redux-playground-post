import { useDispatch } from "react-redux";
import { deleteUser } from "../store/userSlice";
import { editUser } from "../store/userSlice";
const UserCard = ({
  data,
  setEditInputs,
  setUpdateUser,
  setName,
  setEmail,
  setMobile,
  setUserName,
}) => {
  const disPatch = useDispatch();
  const deletePostHandler = (data) => {
    disPatch(deleteUser(data.id));
  };
  const editUserHandler = (data) => {
    setUpdateUser(false);
    setEditInputs(data);
    disPatch(editUser(data));
    setName(data.name);
    setMobile(data.phone);
    setEmail(data.email);
    setUserName(data.username);
  };
  return (
    <div className="userCard">
      <div>Name: {data.name}</div>
      <div>Email: {data.email}</div>
      <div>Mobile number: {data.phone}</div>
      <div>User Name: {data.username}</div>
      <div>User Name: {data.id}</div>
      <div className="cardBtn">
        <button onClick={() => deletePostHandler(data)}>Delete</button>
        <button onClick={() => editUserHandler(data)}>Edit</button>
      </div>
    </div>
  );
};
export { UserCard };
