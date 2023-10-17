// Example validation functions for user registration
const validateUserRegistration = (userData) => {
  const errors = {};

  // Validate username
  if (!userData.username || userData.username.trim() === '') {
    errors.username = 'Username is required';
  }

  // Validate email
  if (!userData.email || !isValidEmail(userData.email)) {
    errors.email = 'Valid email is required';
  }

  // Validate password
  if (!userData.password || userData.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  }

  return errors;
};

// Example function to check if a string is a valid email
const isValidEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

module.exports = { validateUserRegistration };
