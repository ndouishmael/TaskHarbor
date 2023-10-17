// Function to generate a random alphanumeric string
const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
};

// Function to format a date as a human-readable string
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};

// Function to handle errors and send a standardized error response
const handleServerError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
};

module.exports = { generateRandomString, formatDate, handleServerError };
