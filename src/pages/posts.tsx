import { useEffect, useState } from "react";
import { Post } from "@/types/post";
import { PostsAPI } from "@/services/postsService";

export default function Posts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const api = new PostsAPI();

        api.getAllPosts()
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message || "Error al cargar posts");
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Cargando posts...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="grid gap-4">
            {posts.map((post) => (
                <div key={post.id} className="border p-4 rounded shadow">
                    <h2 className="font-bold text-lg">{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}
