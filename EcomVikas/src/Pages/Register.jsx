import React, { useState } from "react";
const token = Boolean(localStorage.getItem("authToken")); // string
const Register = () => {
  const [isLogedin, setIsLogedIn] = useState(token);
  const handleLogin = () => {
    localStorage.setItem("authToken", "vikash");
    setIsLogedIn(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLogedIn(false);
  };
  return (
    <>
      <h1 className="text-5xl">Welcome users</h1>
      <h1>{isLogedin ? "You are Logged in" : "You are not Logged in"}</h1>
      <div className=" flex justify-center  gap-1 mt-4">
        {isLogedin ? (
          <button
            className="border-2 border-red-600 px-4 py-2  bg-red-500 text-white  hover:bg-red-400 hover:text-black "
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <button
            className="border-2 border-red-600 px-4 py-2 bg-red-500 text-white hover:bg-red-400 hover:text-black"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
      </div>
    </>
  );
};

export default Register;

// import React, { useState } from "react";
// import axios from "axios";
// const Profile = () => {
//   const details = { name: "", email: "", mobile: "", address: "", dob: "" };
//   const [data, setUserData] = useState(details);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const userNewUserProfile = {
//       name: data.name,
//       email: data.email,
//       mobile: data.mobile,
//       address: data.address,
//       dob: data.dob,
//     };

//     try {
//       const response = await fetch(
//         "https://novel-51860-default-rtdb.firebaseio.com/UserProfiles",
//         {
//           method: "POST",
//           body: JSON.stringify(userNewUserProfile),
//         }
//       );
//       const result = await response.json();
//       if (response.ok) {
//         console.log("User registered sucessfully : ", result);
//       } else {
//         console.log("Error registering user : ", result);
//       }
//     } catch (error) {
//       console.log("Error : ", error);
//     }
//   };
//   return (
//     <>
//       <h1>Create Profile</h1>
//       <div className="border-2 px-2 ">
//         <form action="" onSubmit={handleSubmit}>
//           <p>
//             <b>Name : </b>
//             <input
//               className="border-2 px-2"
//               type="text"
//               placeholder="Name..."
//               name="name"
//               onChange={(e) => setUserData({ ...data, name: e.target.value })}
//               value={data.name}
//             />
//           </p>
//           <p>
//             <b>Email : </b>
//             <input
//               className="border-2 px-2"
//               type="text"
//               placeholder="email..."
//               name="email"
//               onChange={(e) => setUserData({ ...data, email: e.target.value })}
//               value={data.email}
//             />
//           </p>
//           <p>
//             <b>Mobile 📞 : </b>
//             <input
//               className="border-2 px-2"
//               type="text"
//               placeholder="Contact no..."
//               minLength={10}
//               maxLength={10}
//               name="mobile"
//               onChange={(e) => setUserData({ ...data, mobile: e.target.value })}
//               value={data.mobile}
//             />
//           </p>
//           <p>
//             <b>Address : </b>
//             <input
//               className="border-2 px-2"
//               type="text"
//               placeholder="Address..."
//               name="address"
//               onChange={(e) =>
//                 setUserData({ ...data, address: e.target.value })
//               }
//               value={data.address}
//             />
//           </p>
//           <p>
//             <b>DOB : </b>
//             <input
//               className="border-2 px-2"
//               type="date"
//               placeholder="Date of birth..."
//               name="dob"
//               onChange={(e) => setUserData({ ...data, dob: e.target.value })}
//               value={data.dob}
//             />
//           </p>
//           <input className="border-2 px-2" type="submit" />
//         </form>
//       </div>
//     </>
//   );
// };

// export default Profile;
