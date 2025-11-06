import { useEffect, useState } from "react";
import getUsers from "./api/users";
import type { userProps } from "./types/userProps";
import UserItem from "./components/userItem";

function App() {
  const [users, setUsers] = useState<userProps[] | null>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();

        if (data) {
          console.log(data);
          setUsers(data);
        } else {
          throw Error;
        }
      } catch (error) {
        setError("Failed to fetch users");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="w-svw min-h-svh place-content-center">
      <div className="max-w-[800px] mx-auto px-4 my-20">
        {error && <div>{error}</div>}
        <div className="space-y-5">
          {users?.map((user) => (
            <UserItem {...user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
