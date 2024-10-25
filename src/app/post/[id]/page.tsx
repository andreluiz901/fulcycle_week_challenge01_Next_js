interface PostProps {
  params: { id: string };
}

export default async function Post({ params }: PostProps) {

  const {id} = await params
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">{post.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{post.body}</p>
      <a href="/" className="inline-block text-blue-500 underline text-lg hover:text-blue-700">Voltar para a listagem</a>
    </div>
  );
}
