
 const validateName = (name) => {
    const regex = /^[a-z]+$/i;
    return regex.test(name);
  };

 const validateNumber = (number) => {
    const regex = /^[6-9]\d{9}$/;
    return regex.test(number);
  };

  const validateEmail = (email) => {
    const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[@#$*!&%])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
  };

  export {validateEmail, validateName, validateNumber, validatePassword}