import { useState } from "react";
import users from "../JSON/users.json";

function VisaHook() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const handleSelectChange = (e) => {
    const userId = parseInt(e.target.value, 10);
    const user = users.find((u) => u.id === userId);
    setSelectedUser(user);
  };

  return [users, selectedUser, handleSelectChange];
}

export default VisaHook;
