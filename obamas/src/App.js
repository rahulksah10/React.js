import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import About from "./Components/About";
import TextForm from "./Components/TextForm";




function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      if (prevMode === "light") {
        showAlert("Dark mode has been Enabled", "success");
        document.title = "Obamas - Dark-Mode"
      } else {
        showAlert("light mode has benn enabled", "success");
        document.title = "Obamas - light-Mode"
      }
      document.body.style.backgroundColor =
        newMode === "dark" ? "#042743" : "white";
      document.body.style.color = newMode === "dark" ? "white" : "black";
      return newMode;
    });
  };

  // {-- chatgpt--}
  //   const toggleMode = () => {
  //   setMode((prevMode) => {
  //     const newMode = prevMode === "light" ? "dark" : "light";

  //     // Set background and text color according to the new mode
  //     document.body.style.backgroundColor = newMode === "dark" ? "#042743" : "white";
  //     document.body.style.color = newMode === "dark" ? "white" : "black";

  //     return newMode;
  //   });
  // };
  return (
    <>
      <Navbar title="Obamas" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar/> */}
      <Alert alert={alert} />
      <div className="container ">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" />
        <About/>
      </div>
    </>
  );
}

export default App;
