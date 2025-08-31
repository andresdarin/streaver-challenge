import { User } from "lucide-react";
import { Post } from "../../types/post";
import { get } from "lodash";

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
        <div className={`
            relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
            cursor-pointer group w-full h-full min-h-[320px]
            ${getCardColor(post.id)}
            backdrop-blur-sm border border-white/20
            hover:-translate-y-2 hover:scale-[1.02] p-4 flex flex-col justify-between
        `}>
            <p className="inline-flex self-start items-center gap-1 bg-gray-200 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-gray-300 mb-2">
                <User className="w-3 h-3" /> User {post.userId}
            </p>
            <h2 className="font-bold uppercase tracking-tight text-lg leading-tight mb-3
                text-gray-800 group-hover:text-gray-900 transition-colors duration-200">
                {post.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">{post.body}</p>
            <div className="mt-4 pt-4 border-t border-gray-200/40">
                <span className="text-xs text-gray-500">Post #{post.id}</span>
            </div>
        </div>
    );
}
