import { useState } from "react";
import "./form.scss";
import FormSubscribe from "./FormSubscribe";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  function goBack() {
    setIsSubmitted(false);
  }

  return (
    <>
      {!isSubmitted ? (
        <FormSubscribe submitForm={submitForm} />
      ) : (
        <FormSuccess goBack={goBack} />
      )}
    </>
  );
};

export default Form;
