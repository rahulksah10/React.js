// import { useForm, SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form";


import './App.css'
import DynamicForm from "./DynamicForm";

function App() {

    const formFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
      validation: { required: "Name is required" }
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      validation: {
        required: "Email is required",
        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
      }
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter password",
      validation: {
        required: "Password is required",
        minLength: { value: 6, message: "Min 6 chars" }
      }
    }
  ];

  const handleFormSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return <DynamicForm  fields={formFields} onSubmit={handleFormSubmit} />;
}


export default App
