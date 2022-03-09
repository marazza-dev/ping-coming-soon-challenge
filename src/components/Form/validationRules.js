export default function validationRules(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Whoops! It looks like you forgot to add your email";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Please provide a valid email address";
  }
  return errors;
}
