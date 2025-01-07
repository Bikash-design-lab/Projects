import { useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [editId, setEditId] = useState(null);
  const [users, setUsers] = useState([]);
  // Add data to the the backend(Firebase) using axios
  async function addData() {
    try {
      const newUser = { name, email, phone }; // Lets make new object
      await axios.post(
        "https://abcd-e8402-default-rtdb.firebaseio.com/users.json",
        newUser
      ); // pass url and data
      fetchUsers();
      setEmail("");
      setName("");
      setPhone("");
      setEditId(null);
    } catch (error) {
      console.log("Fails to post data in Firebase,", error);
    }
  }
  // Fetch data request to UI
  async function fetchUsers() {
    const response = await axios.get(
      "https://abcd-e8402-default-rtdb.firebaseio.com/users.json"
    );
    const fetchedUsers = [];
    for (let key in response.data) {
      fetchedUsers.push({ id: key, ...response.data[key] });
    }
    setUsers([...fetchedUsers]);

    // console.log(response.data);
    console.log(fetchedUsers); // return
  }

  // console.log("Response from API : ", response.data);

  // Delete user from UI and backend
  async function deleteUser(id) {
    try {
      await axios.delete(
        `https://abcd-e8402-default-rtdb.firebaseio.com/users/${id}.json`
      );
      fetchUsers();
    } catch (error) {
      console.log("Fails to halndle Delete operation : ", error);
    }
  }

  // Edit user data

  function editUser(id) {
    const user = users.find((user) => user.id === id);
    setEditId(id);
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
  }
  async function updateUser() {
    const updateUser = { name, email, phone };
    await axios.patch(
      `https://abcd-e8402-default-rtdb.firebaseio.com/users/${editId}.json`,
      updateUser
    );
    fetchUsers();
    setEmail("");
    setName("");
    setPhone("");
    setEditId(null);
  }
  return (
    <>
      <h1>User Management</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Name..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          placeholder="Enter Email..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="number"
          placeholder=" Contact Number "
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <button onClick={editId ? updateUser : addData}>
          {editId ? "Update user" : "Add user"}
        </button>

        <button onClick={fetchUsers}>Fetch Data</button>
        <table>
          <thead>
            <tr>
              <th>Name 📛</th>
              <th>Email 📧</th>
              <th>Contact No. 🤳</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td> {user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => editUser(user.id)}>Edit 🖊️</button>
                </td>
                <td>
                  <button onClick={() => deleteUser(user.id)}>Remove 🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ul></ul>
      </div>
    </>
  );
}

export default App;
