import PostItem from './PostItem';

interface PostListProps {
  posts: { id: number; title: string }[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostItem key={post.id} id={post.id} title={post.title} />
      ))}
    </ul>
  );
}
