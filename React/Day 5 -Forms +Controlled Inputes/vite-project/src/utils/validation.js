export const validateSignup = ({ name, email, password }) => {
  if (!name || !email || !password) {
    return "All fields are required";
  }

  if (!email.includes("@")) {
    return "Please enter a valid email address";
  }
  if (password.length < 6) {
    return "Password must be at least 6 characters long";
  }
  return null;
};
