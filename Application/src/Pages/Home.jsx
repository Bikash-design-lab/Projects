import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const formDetails = { name: "", category: "", level: "", questions: "" };
  const [data, setData] = useState(formDetails);
  const [formSubmit, setFormSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  console.log(data);
  const handleFormSubmit = () => {
    alert("Let's test your IQ !");
    setFormSubmit(true);
    setData({ name: "", category: "", level: "", questions: "" });
  };
  return (
    <>
      <h1 className="text-5xl">Hey user's</h1>

      <div className="flex justify-center mt-10">
        <div className=" border-4 w-auto px-4 py-8 rounded-lg ">
          <h3 className="text-xl mb-2">
            Fill the basic details to start quiz 🤩🙋‍♂️
          </h3>
          <p className="border-2 border-red-400  mb-2 flex py-2">
            <label className="text-blue-600 font-bold mx-2 ">Name : </label>
            <input
              className="border-2 border-black px-8 "
              type="text"
              placeholder="Enter your name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </p>
          <p className="border-2 border-red-400 mb-8 py-2 flex px-2">
            <label className="text-blue-600 font-bold ">
              Select category :
            </label>
            <select
              name="category"
              value={data.category}
              onChange={handleChange}
              id=""
              //   onChange={(e) => setFormData({ ...formData, [name]: category })}
            >
              <option value=""></option>
              <option value="Politics">Politics</option>
              <option value="General Knowledge">General knowledge</option>
              <option value="History">History</option>
              <option value="Science">Science</option>
              <option value="Histoy">History</option>
            </select>
          </p>
          <p className="border-2 border-red-400 mb-8 py-2 flex px-2">
            <label className="text-blue-600 font-bold">Select Level:</label>
            <select
              name="level"
              value={data.level}
              onChange={handleChange}
              //   onChange={(e) => setFormData({ ...formData, [name]: level })}
              id=""
            >
              <option value=""></option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
              <option value="Low">Low</option>
            </select>
          </p>
          <p className="border-2 border-red-400  mb-2 py-2 px-2">
            <label className="text-blue-600 font-bold ">
              Number of Question :
            </label>
            <input
              name="questions"
              value={data.questions}
              onChange={handleChange}
              className="border-2 border-black px-8 text-sm"
              type="number"
              placeholder="Enter number of question'"
              //   onChange={(e) => setFormData({ ...formData, [name]: questions })}
            />
          </p>
          <button
            onClick={handleFormSubmit}
            className="border-2  px-6 py-1 font-bold text-white rounded-full bg-blue-700 hover:bg-blue-400 hover:text-black"
          >
            <Link to="/Quiz">Start quiz</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

// name
// category-> politics , history, general knowledge, history, science
// difficulty level -> low , medium , high
// no. of question -> seleting preference
// button start quiz
