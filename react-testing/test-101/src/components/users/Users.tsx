import { useState, useEffect } from "react";

export const Users = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.map((user: { name: string }) => user.name)))
      .catch((error) => error && setError("Error fetching data"));
  });
  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};
