export const getUsers = (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];

  res.status(200).json({
    success: true,
    count: users.length,
    users
  });
};
