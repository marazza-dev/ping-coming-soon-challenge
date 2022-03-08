import { useState, useEffect } from "react";

const useValidation = (initialValues, callback, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    event.persist();
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    setErrors(validate(values));

    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useValidation;
