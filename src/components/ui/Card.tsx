import { User } from "lucide-react";
import { Post } from "../../types/post";

interface PostCardProps {
    post: Post;
}

export default function Card({ post }: PostCardProps) {


    // Diferentes colores de fondo para hacer más visual
    const getCardColor = (postId: number) => {
        const colors = [
            'bg-gradient-to-br from-blue-50 to-blue-100',
            'bg-gradient-to-br from-purple-50 to-purple-100',
            'bg-gradient-to-br from-green-50 to-green-100',
            'bg-gradient-to-br from-orange-50 to-orange-100',
            'bg-gradient-to-br from-pink-50 to-pink-100',
        ];
        return colors[postId % colors.length];
    };
    return (
        <div className={`border rounded p-4 shadow hover:shadow-lg transition ${getCardColor(post.id)} cursor-pointer group w-full`}>
            <p className="inline-flex items-center gap-1 bg-gray-200 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-gray-300 mb-2">
                <User className="w-3 h-3" /> User {post.userId}
            </p>
            <h2 className="font-semibold uppercase tracking-tight text-lg leading-snug group-hover:text-primary transition-colors">
                {post.title}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{post.body}</p>
        </div>
    );
}
