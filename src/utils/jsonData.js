// Generate users outside the component to avoid unnecessary recreation on re-renders
export const user = () => {
  const roles = ["Admin", "User", "Editor", "Moderator"];
  const statuses = ["Active", "Inactive", "Pending"];

  return Array.from({ length: 495 }, (_, i) => {
    return {
      id: i + 1,
      image: `https://i.pravatar.cc/50?img=${i + 1}`,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      phone: `0171${i.toString().padStart(6, "0")}`,
      address: `City ${i + 1}, Bangladesh`,
      status: statuses[i % statuses.length],
      role: roles[i % roles.length],
    };
  });
};

export const rolesData = Array.from({ length: 5 }, (_, i) => {
  const roleNames = [
    "Mnagner",
    "Saller",
    "Cashier",
    "Asistant",
    "Receeptionist",
  ];
  return {
    id: i + 1,
    roleName: roleNames[i % roleNames.length],
    description: `Description for ${roleNames[i % roleNames.length]}`,
    status: i % 2 === 0 ? "Active" : "Inactive",
  };
});
