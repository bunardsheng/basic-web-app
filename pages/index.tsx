import { useState } from "react";
import QueryProcessor from "../utils/QueryProcessor";

export default function Home() {
  const [query, setQuery] = useState<string>("");

  return (
    <div>
      <h1>Welcome, this is an edit I made!!</h1>
      <p>What's your favorite food to eat when it's cold?: </p>
      <input
        type="text"
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
      <div>
        {QueryProcessor(query) == "" ? "No Match" : QueryProcessor(query)}
      </div>
    </div>
  );
}
