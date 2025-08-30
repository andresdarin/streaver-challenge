"use client";
import useSWR from "swr";
import { Post } from "@/types/post";
import { fetchPosts } from "@/services/postsService";
import Card from "@/components/ui/Card";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import useDelayedLoading from "@/hooks/useDelayedLoading";
import { POSTS_URL } from "@/utils/constants";

export default function Posts() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const debouncedUserId = useDebounce(searchTerm, 500);

    const url = debouncedUserId
        ? `${POSTS_URL}?userId=${debouncedUserId}`
        : POSTS_URL;

    const { data: posts, error, isLoading } = useSWR<Post[]>(url, fetchPosts);

    const showLoading = useDelayedLoading(isLoading, 500);

    return (
        <main className="max-w-5xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Posts</h1>

            <div className="mb-4">
                <input
                    type="number"
                    placeholder="Filtrar por userId"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="border rounded p-2 w-full md:w-1/3"
                />
            </div>

            {showLoading && (
                <p className="text-yellow-600">
                    Las solicitudes están tardando más de lo esperado...
                </p>
            )}

            {error && <p className="text-red-500">{error.message}</p>}

            <div className="grid gap-4 ">
                <div className="grid gap-4 md:grid-cols-3 ">
                    {posts?.map(post => (
                        <Card key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </main>
    );

}
