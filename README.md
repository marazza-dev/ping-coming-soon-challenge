# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da).

## Table of contents

- [Frontend Mentor - Ping coming soon page solution](#frontend-mentor---ping-coming-soon-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/pingcomingsoon-challenge-with-react-sass-and-vite-tKuy4mVXR](https://www.frontendmentor.io/solutions/pingcomingsoon-challenge-with-react-sass-and-vite-tKuy4mVXR)
- Live Site URL: [https://marazza-dev.github.io/ping-coming-soon-challenge](https://marazza-dev.github.io/ping-coming-soon-challenge)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Sass](https://sass-lang.com/) - CSS preprocessor
- [Vite](https://vitejs.dev/) - Bundler and Dev Tooling
- Custom React Hook for validation
- Semantic HTML5 markup
- Sass mixins and variables
- Flexbox
- Mobile-first workflow

### What I learned

The most valuable thing that I learned is to validate user input using react custom hook, which can be a little tricky at first.

```js
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
};
```

### Continued development

I'm going to keep practicing on client side input validation, following security and performance best practices

## Author

- Frontend Mentor - [@marazza-dev](https://www.frontendmentor.io/profile/marazza-dev)
- Twitter - [@marazza_dev](https://www.twitter.com/marazza_dev)
