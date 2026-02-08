// Controller for user-related API logic
// In a real application, this would connect to a database

export const getUsers = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    users: [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" }
    ]
  });
};
