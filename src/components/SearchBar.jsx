import { Search } from "lucide-react";

export default function SearchBar({
  query,
  setQuery,
  setSearch,
}) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow mb-6 flex items-center gap-3">

      <Search className="text-gray-500" />

      <input
        type="text"
        placeholder="Search student..."
        className="w-full outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        onClick={() => setSearch(query)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Search
      </button>

    </div>
  );
}