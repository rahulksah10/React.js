// import { useForm, SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form";


import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("submitting the form", data)
  }

  return (

    <form className="flex flex-col items-center  px-4" onSubmit={handleSubmit(onSubmit)}>
      <div >
        <label htmlFor="">FirstName: </label>
        <input
          className="border"
         {...register("firstName",
          {
            required: true,
            minLength: { value: 3, message: ' min length atleast 3' }, maxLength: { value: 8, message: ' reached maximum length' },
          })} type="text"  />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <br />
      <div>
        <label htmlFor="">MiddleName: </label>
        <input {...register("middleName", {
          required: true,
          minLength: { value: 3, message: ' min length atleast 3' }, maxLength: { value: 8, message: ' reached maximum length' },
        })} type="text" className="border" />
        {errors.middleName && <p>{errors.middleName.message}</p>}
      </div>
      <br />
      <div>
        <label htmlFor="">LastName: </label>
        <input {...register("lastName", {
          required: true,
          minLength: { value: 3, message: ' min length atleast 3' }, maxLength: { value: 8, message: ' reached maximum length' },
        })} type="text" className="border" />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <button type="submit">submit</button>
    </form>
  )
}

export default App
