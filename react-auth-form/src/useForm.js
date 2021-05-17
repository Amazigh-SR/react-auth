import { useState, useEffect } from "react";

const useForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target; // clever way to de-structure the name and value;
    setValues({
      ...values,
      // [e.target.name]: e.target.value, --> same as below code
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return { handleChange, values, handleSubmit };
};

export default useForm;
