import React, { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  // Start / Pause Timer
  const toggleTimer = () => {
    if (isActive) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    setIsActive(!isActive);
  };

  // Reset Timer
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsActive(false);
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  // Format Time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 font-poppins">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-sm text-center">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          ⏱ Stopwatch Timer
        </h2>

        <div className="text-5xl font-mono text-blue-600 mb-6">
          {formatTime(time)}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={toggleTimer}
            className={`px-5 py-2 rounded-lg text-white font-semibold shadow-md transition-all duration-300 ${
              isActive ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isActive ? "Pause" : "Start"}
          </button>

          <button
            onClick={resetTimer}
            className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold shadow-md transition-all duration-300"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
