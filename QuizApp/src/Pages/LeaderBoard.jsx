import React, { useEffect, useState } from "react";

const LeaderBoard = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://mmasai-default-rtdb.firebaseio.com/Users.json")
      .then((response) => response.json())
      .then((result) => {
        const data = Object.values(result);
        setUserData(data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  // Function to calculate correct and incorrect answers
  const calculateAnswers = (results) => {
    if (!results) return { correctCount: 0, incorrectCount: 0 }; // Handle case where results is undefined

    const correctCount = results.filter((result) => result.isCorrect).length;
    const incorrectCount = results.length - correctCount; // total questions minus correct ones
    return { correctCount, incorrectCount };
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex flex-col pt-4 items-center">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
        LeaderBoard
      </h1>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        {userData.length > 0 ? (
          userData.map((user, index) => {
            // Calculate correct and incorrect answers
            const { correctCount, incorrectCount } = calculateAnswers(
              user.selectedAnswers.results
            );

            return (
              <div
                key={index}
                className="border-b border-gray-300 last:border-0"
              >
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <p className="text-gray-800 font-semibold">
                    <span className="font-bold">Name:</span> {user.name}
                  </p>
                  <p className="text-gray-800 font-semibold">
                    <span className="font-bold">Level:</span> {user.level}
                  </p>
                  <p className="text-gray-800 font-semibold">
                    <span className="font-bold">Category:</span> {user.category}
                  </p>
                </div>

                <div className="text-gray-700">
                  <strong>Held on:</strong>{" "}
                  {new Date(user.dateOfExam).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </div>

                {/* Display the correct and incorrect answers count */}
                <div className="mt-4 text-gray-800 font-semibold">
                  <strong>Correct Answers:</strong> {correctCount}
                </div>
                <div className="mt-2 text-gray-800 font-semibold">
                  <strong>Incorrect Answers:</strong> {incorrectCount}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default LeaderBoard;
