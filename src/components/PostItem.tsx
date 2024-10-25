import Link from 'next/link';

interface PostItemProps {
  id: number;
  title: string;
}

export default function PostItem({ id, title }: PostItemProps) {
  return (
    <li className="border border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-100 transition duration-300 ease-in-out">
      <Link href={`/post/${id}`} className="text-lg font-medium text-gray-800 hover:text-blue-500">
        {title}
      </Link>
    </li>
  );
}
