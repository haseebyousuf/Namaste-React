export const loginValidation = (email, password, isSignInForm) => {
  const isValidEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  if (!isSignInForm) {
    const isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!isPasswordValid) return "Choose a Strong Password";
  }

  if (email.length <= 0) return "Email is required";
  else if (!isValidEmail) return "Email is invalid";

  return null;
};
