export const loginValidation = (email, password, name, isSignInForm) => {
  const isValidEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );

  if (email.length <= 0) return "Email is required";
  else if (!isValidEmail) return "Email is invalid";

  if (!isSignInForm) {
    if (name.length <= 0) return "Name is required";

    const isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (password.length <= 0) {
      return "Password is required";
    } else if (!isPasswordValid) return "Choose a Strong Password";
  }

  return null;
};
