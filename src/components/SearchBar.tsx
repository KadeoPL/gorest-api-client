import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";

interface SearchProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchProps) {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(query);
    }, 400); //

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="w-full flex items-center gap-4 my-10">
      <div className="relative w-full">
        <Search
          className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"
          size={16}
        />
        <Input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Search users by name..."
          className="pl-8 h-12"
        />
      </div>
    </div>
  );
}
