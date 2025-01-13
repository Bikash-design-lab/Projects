import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Quiz = () => {
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple"
      )
      .then((response) => setQuestion(response.data.results))
      .catch(console.error("Error to fetch api"));
  }, []);

  console.log(question);
  return (
    <>
      <div className="flex justify-between px-4 my-5">
        <button className="border-2 py-1 px-1 text-white rounded-full bg-blue-700 hover:bg-blue-400 hover:text-black">
          <Link to="/">go Back</Link>
        </button>
        <h1 className="text-3xl">Attempt quiz</h1>
        <button className="border-2 py-1 px-1 text-white rounded-full bg-blue-700 hover:bg-blue-400 hover:text-black">
          <Link to="/LeaderBoard">next page</Link>
        </button>
      </div>
      <div className=" border-4  h-screen">
        <p>Total : {question.length} question</p>
        {question.map((ques, id) => (
          <div key={id} className="border-5 flex border-4 border-red-700">
            <h1>
              {" "}
              <b>Question : {id + 1}</b>
              {ques.question}
            </h1>
            <p>
              {" "}
              <b>option-1 </b>:{ques.correct_answer}
            </p>
            <p>
              {" "}
              <b>option-2 </b>: {ques.incorrect_answers[0]}{" "}
            </p>
            <p>
              <b> option-3</b> :{ques.incorrect_answers[1]}
            </p>
            <p>
              <b> option-4</b> :{ques.incorrect_answers[2]}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Quiz;
