import useValidation from "../../hook/useValidation";
import validate from "./validationRules";

const FormSubscribe = ({ submitForm }) => {
  const initialValues = { email: "" };

  const { handleChange, handleSubmit, values, errors } = useValidation(
    initialValues,
    submitForm,
    validate
  );

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor='email'></label>
        <input
          placeholder='      Your email address...'
          type='email'
          name='email'
          id='email'
          className={`form__email ${errors.email ? "danger" : ""}`}
          value={values.email}
          onChange={handleChange}
          onFocus={(e) => (e.target.placeholder = "")}
        />

        {errors.email && <span className='danger'>{errors.email}</span>}
        <button type='submit' className='btn btn--valid'>
          Notify Me
        </button>
      </form>
    </>
  );
};

export default FormSubscribe;
