"use client";

import useSWR from "swr";
import { Post } from "@/types/post";
import { fetchPosts } from "@/services/postsService";
import Card from "@/components/ui/Card";
import { useState } from "react";

export default function Posts() {
    const [userIdFilter, setUserIdFilter] = useState<string>("");

    const url = userIdFilter
        ? `https://jsonplaceholder.typicode.com/posts?userId=${userIdFilter}`
        : "https://jsonplaceholder.typicode.com/posts";

    const { data: posts, error, isLoading } = useSWR<Post[]>(url, fetchPosts);

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

            {isLoading && <p>Cargando posts...</p>}
            {error && <p className="text-red-500">{error.message}</p>}

            <div className="grid gap-4 md:grid-cols-2">
                {posts?.map((post) => (
                    <Card key={post.id} post={post} />
                ))}
            </div>
        </main>
    );
}
