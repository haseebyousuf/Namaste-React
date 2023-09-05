export const customErrorMessage = (code) => {
  if (!code) return "";
  if (code === "auth/network-request-failed")
    return "The network request has failed. Please try again";
  if (code === "auth/user-disabled")
    return "Account has been disabled by an administrator";
  if (code === "auth/user-not-found") return "Invalid Credentials";
  if (code === "auth/weak-password")
    return "Email address already in use, please sign in instead";
  if (code === "auth/email-already-in-use")
    return "Email address already in use, please sign in instead";
  if (code === "auth/invalid-email") return "Invalid Credentials";
  if (code === "auth/wrong-password") return "Invalid Credentials";
  return "There is Some error.";
};
