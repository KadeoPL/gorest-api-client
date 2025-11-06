import { useEffect, useState } from "react";
import getUsers from "./api/users";
import type { userProps } from "./types/userProps";
import UserItem from "./components/UserItem";
import SearchBar from "./components/SearchBar";
import { Spinner } from "./components/ui/spinner";
import Pagination from "./components/Pagination";
import { getUserDetails } from "./api/users";

type fetchStatus = "idle" | "fetching";

function App() {
  const [users, setUsers] = useState<userProps[] | null>([]);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<fetchStatus>("idle");
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [query, setQuery] = useState("");

  const fetchUsers = async (query?: string, pageNumber: number = 1) => {
    setStatus("fetching");
    try {
      const data = await getUsers(query, pageNumber);

      setPage(pageNumber);
      setHasNext(data.length === 10);

      if (data) {
        setStatus("idle");
        setUsers(data);
      } else {
        throw Error;
      }
    } catch (error) {
      setError("Failed to fetch users");
      setStatus("idle");
    }
  };

  const handleEdit = (id: number) => {
    getUserDetails(id);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="w-svw min-h-svh place-content-center">
      <div className="max-w-[800px] mx-auto px-4 my-20">
        <SearchBar
          onSearch={(value) => {
            setQuery(value);
            fetchUsers(value, 1);
          }}
        />

        {error && <div>{error}</div>}

        {status === "fetching" ? (
          <Spinner />
        ) : (
          <div className="space-y-5">
            {users?.map((user, index) => (
              <UserItem {...user} key={index} onEdit={handleEdit} />
            ))}
          </div>
        )}
        {users && users.length > 0 && error ? (
          <Pagination
            fetchUsers={fetchUsers}
            page={page}
            hasNext={hasNext}
            query={query}
          />
        ) : (
          <div>No results</div>
        )}
      </div>
    </div>
  );
}

export default App;
