import { useEffect } from "react";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type UserListProps = {
  users: User[];
  onload: (users: User[]) => void;
};

function UserList({ users, onload }: UserListProps) {
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     //   .then((res) => res.json())
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`Failed to fetch users: ${response.status}`);
  //       }

  //       return response.json() as Promise<User[]>;
  //     })
  //     .then((data) => onload(data))
  //     .catch((error) => console.error(error));
  // }, []);
  useEffect(() => {
    fetch("https://api.example.com/users")
      .then((res) => res.json())
      .then((data) => onload(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default UserList;
