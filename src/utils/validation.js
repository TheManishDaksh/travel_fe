
 const validateName = (name) => {
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return regex.test(name);
  };

 const validateNumber = (number) => {
    const regex =  /^(\+?\d{1,3}[- ]?)?\d{10}$/;
    return regex.test(number);
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[@#$*!&%])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
  };

  const validateConfirmPassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[@#$*!&%])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
  };
  export {validateEmail, validateName, validateNumber, validatePassword, validateConfirmPassword}