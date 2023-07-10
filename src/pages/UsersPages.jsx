import { UserCard } from "../components/UserCard";
import axios from "axios";
import { loadUserData } from "../store/userSlice";
import { addNewUser, editUser, editUserInputs } from "../store/userSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
// import * as yup from "yup";
const UsersPage = () => {
  const [data, setData] = useState([]);
  const [updateUser, setUpdateUser] = useState(true);
  const [editInputs, setEditInputs] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [userName, setUserName] = useState();
  const disPatch = useDispatch();
  const getData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    setData(data);
    disPatch(loadUserData(data));
  };
  useEffect(() => {
    getData();
  }, []);

  const userData = useSelector((data) => data.user.userArr);
  // const formik = useFormik({
  //   initialValues: { editInputs },
  //   onSubmit: (values) => {
  //     if (editInputs) {
  //       disPatch(editUserInputs(editInputs));
  //     } else {
  //       values.id = uuidv4();
  //       disPatch(addNewUser(values));
  //     }
  //   },
  // });
  const addUserHandler = () => {
    let newUser = {
      name: name,
      email: email,
      phone: mobile,
      username: userName,
      id: uuidv4(),
    };
    disPatch(addNewUser(newUser));
  };
  const updateUserHandler = (data) => {
    let updatedUser = {
      name: name,
      email: email,
      phone: mobile,
      username: userName,
    };
    disPatch(editUserInputs(updatedUser));
  };

  return (
    <div>
      <div className="userMain">
        <div className="userLayout">
          {userData.map((data) => (
            <div key={data.id}>
              <UserCard
                setUpdateUser={setUpdateUser}
                setEditInputs={setEditInputs}
                data={data}
                setName={setName}
                setEmail={setEmail}
                setMobile={setMobile}
                setUserName={setUserName}
              />
            </div>
          ))}
        </div>

        <div className="form">
          <span>
            <input
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              name="name"
              value={name}
            />
          </span>
          <span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              name="email"
              value={email}
            />
          </span>
          <span>
            <input
              placeholder="Mobile number"
              name="phone"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </span>
          <span>
            <input
              placeholder="User name"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </span>
          {updateUser === true ? (
            <button
              className="btn"
              onClick={() => addUserHandler()}
              type="submit"
            >
              Add user card
            </button>
          ) : (
            <button
              className="btn"
              onClick={() => updateUserHandler(data)}
              type="button"
            >
              update user card
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export { UsersPage };
