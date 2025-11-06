import { Button } from "./ui/button";

interface PaginationProps {
  fetchUsers: (query: string | undefined, page: number) => void;
  page: number;
  hasNext: boolean;
  query?: string;
}

export default function Pagination({
  fetchUsers,
  page,
  hasNext,
  query,
}: PaginationProps) {
  return (
    <div className="flex justify-between items-center mt-8">
      <Button onClick={() => fetchUsers(query, page - 1)} disabled={page === 1}>
        Prev
      </Button>

      <span className="text-sm text-muted-foreground">Strona {page}</span>

      <Button onClick={() => fetchUsers(query, page + 1)} disabled={!hasNext}>
        Next
      </Button>
    </div>
  );
}
