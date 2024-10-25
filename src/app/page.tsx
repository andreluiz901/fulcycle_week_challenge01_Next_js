import PostList from "@/components/PostList";

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}