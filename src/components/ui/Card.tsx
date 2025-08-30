import { Post } from "../../types/post";

interface Props {
    post: Post;
}

export default function Card({ post }: Props) {
    return (
        <div className="border rounded p-4 shadow hover:shadow-lg transition">
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
            <p className="text-sm text-gray-500 mt-2">User ID: {post.userId}</p>

            <div className="bg-pink-500 text-white p-6 rounded-xl">
                Si esto se ve rosado, Tailwind funciona en Pages Router
            </div>
        </div>

    );
}
