import { User } from "lucide-react";
import { Post } from "../../types/post";

interface PostCardProps {
    post: Post;
}

export default function Card({ post }: PostCardProps) {
    return (
        <div className="border rounded p-4 shadow hover:shadow-lg transition">
            <p className="inline-flex items-center gap-1 bg-gray-200 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-gray-300 mb-2">
                <User className="w-3 h-3" /> User {post.userId}
            </p>
            <h2 className="font-semibold tracking-tight text-lg leading-snug group-hover:text-primary transition-colors">
                {post.title}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{post.body}</p>
        </div>
    );
}
