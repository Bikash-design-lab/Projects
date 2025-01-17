import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

const Quiz = () => {
  const [question, setQuestion] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState({});
  const navigate = useNavigate();
  const { userId } = useParams();

  // Fetch questions
  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10")
      .then((response) => {
        const shuffledQuestions = response.data.results.map((ques) => {
          const shuffledOptions = shuffleOptions(
            ques.correct_answer,
            ques.incorrect_answers
          );
          return { ...ques, options: shuffledOptions };
        });
        setQuestion(shuffledQuestions);

        // Store correct answers for comparison
        const correctAnswersObj = response.data.results.reduce(
          (acc, ques, index) => {
            acc[index] = ques.correct_answer;
            return acc;
          },
          {}
        );
        setCorrectAnswers(correctAnswersObj);
      })
      .catch((error) => console.error("Error fetching API", error));
  }, []);

  const handleCheckAnswer = (e, questionId) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: e.target.value,
    }));
  };

  // Submit answers and update Firebase
  const handleSubmitQuiz = async () => {
    try {
      if (Object.keys(selectedAnswers).length === question.length) {
        // Compare selected answers with correct answers
        const results = Object.keys(selectedAnswers).map((questionId) => {
          const userAnswer = selectedAnswers[questionId];
          const correctAnswer = correctAnswers[questionId];
          return {
            questionId,
            userAnswer,
            correctAnswer,
            isCorrect: userAnswer === correctAnswer,
          };
        });

        // Send selected answers and results to Firebase
        await axios.patch(
          `https://mmasai-default-rtdb.firebaseio.com/Users/${userId}/selectedAnswers.json`,
          { selectedAnswers, results }
        );

        // Redirect to leaderboard page
        navigate(`/LeaderBoard/${userId}`);
      } else {
        console.log("Not all questions answered.");
      }
    } catch (error) {
      console.error("Error updating quiz answer ", error);
    }
  };

  const shuffleOptions = (correct, incorrect) => {
    const options = [...incorrect, correct];
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <>
      <div className="px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
        <h1 className="text-4xl font-bold text-center">
          Think Fast : Quiz Time!
        </h1>
      </div>

      <button className="flex justify-start items-center bg-blue-800 hover:bg-blue-600 text-sm px-2 text-white rounded-lg shadow-md transition duration-300 mx-6 my-4">
        <Link to="/">Go Back</Link>
      </button>

      <div className="max-w-4xl mx-auto mt-8 px-4 py-6 bg-white rounded-lg shadow-xl">
        <p className="text-xl mb-6 font-semibold text-gray-700">
          Total: {question.length} Questions
        </p>

        {question.map((ques, id) => (
          <div key={id} className="border-b-2 py-6 mb-6">
            <div className="text-lg font-medium text-gray-800 mb-4">
              <b>Question {id + 1}:</b> {ques.question}
            </div>
            <div className="space-y-4">
              {ques.options.map((option, index) => (
                <div key={index} className="flex items-center text-gray-600">
                  <input
                    type="radio"
                    name={`question-${id}`}
                    value={option}
                    onClick={(e) => handleCheckAnswer(e, id)}
                    className="mr-3 w-4 h-4 text-blue-500 focus:ring-blue-300"
                  />
                  <b>Option {index + 1}:</b> {option}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmitQuiz}
        className="my-5 bg-blue-800 hover:bg-blue-600 text-xl text-white py-1 px-4 rounded-lg shadow-md transition duration-300"
      >
        Submit
      </button>
    </>
  );
};

export default Quiz;
