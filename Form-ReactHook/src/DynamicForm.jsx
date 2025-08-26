import React from 'react'
import { useForm } from 'react-hook-form';

const DynamicForm = ({ fields, onSubmit }) => {

    const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();


  return (
   <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-6 bg-white shadow rounded-xl max-w-md mx-auto"
    >
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label className="font-medium mb-1">{field.label}</label>

          <input
            type={field.type || "text"}
            placeholder={field.placeholder}
            className="border rounded p-2"
            {...register(field.name, field.validation)}
          />

          {errors[field.name] && (
            <span className="text-red-500 text-sm">
              {errors[field.name].message}
            </span>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default DynamicForm
