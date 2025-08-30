import { useEffect, useState } from "react";
import { Post } from "@/types/post";
import { PostsAPI } from "@/services/postsService";
import Card from "@/components/ui/Card";

export default function Posts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [userIdFilter, setUserIdFilter] = useState<string>(""); // Estado para el filtro de cuando userId cambia

    const api = new PostsAPI();

    useEffect(() => {
        setLoading(true);
        setError(null);

        const fetchPosts = userIdFilter
            ? api.getPostsByUserId(userIdFilter)
            : api.getAllPosts();

        fetchPosts
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message || "Error al cargar posts");
                setLoading(false);
            });
    }, [userIdFilter]); // refetch cada vez que cambia el filtro

    return (
        <main className="max-w-5xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Posts</h1>

            <div className="mb-4">
                <input
                    type="number"
                    placeholder="Filtrar por userId"
                    value={userIdFilter}
                    onChange={(e) => setUserIdFilter(e.target.value)}
                    className="border rounded p-2 w-full md:w-1/3"
                />
            </div>

            {loading && <p>Cargando posts...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <div className="grid gap-4 md:grid-cols-2">
                {posts.map((post) => (
                    <Card key={post.id} post={post} />
                ))}
            </div>
        </main>
    );
}
