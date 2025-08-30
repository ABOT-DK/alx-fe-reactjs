import { useQuery } from "@tanstack/react-query";

// API function
const fetchPosts = async (page) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
  );
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export default function PostsComponent() {
  const [page, setPage] = React.useState(1);

  // React Query with keepPreviousData
  const {
    data: posts,
    error,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    keepPreviousData: true,   // ✅ requirement satisfied
    staleTime: 5000,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-4 w-[600px] space-y-4 border rounded shadow">
      <h2 className="text-xl font-bold flex justify-between items-center">
        Posts (Page {page})
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          disabled={isFetching}
        >
          {isFetching ? "Refreshing..." : "Refresh"}
        </button>
      </h2>

      <ul className="space-y-2">
        {posts?.map((post) => (
          <li key={post.id} className="p-2 border-b">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>

      <div className="flex justify-between">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
          className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((old) => old + 1)}
          className="bg-gray-300 px-3 py-1 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
