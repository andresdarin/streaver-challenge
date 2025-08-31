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
        <main className="max-w-5xl mx-auto p-4  m-10 p-10 ">
            <div className=" rounded p-4 shadow mb-4 group w-full bg-gradient-to-r from-green-100 via-blue-50 to-orange-100">
                <h1 className="text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500
                           transition-all duration-500 cursor-default hover:from-pink-400 hover:via-purple-500 hover:to-blue-400
                           hover:scale-105">Posts</h1>
                <p className="text-center text-gray-700 dark:text-gray-400 mt-1">
                    Explora los posts más interesantes y descubre contenido nuevo cada día.
                </p>


                <form className="w-full p-4 flex justify-center">
                    <label htmlFor="user-search" className="sr-only">Filtrar por userId</label>
                    <input
                        type="number"
                        id="user-search"
                        placeholder="Filtrar por userId..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-4 text-sm text-gray-200 placeholder-gray-400 bg-gray-250/50 rounded-xl border border-purple-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:brightness-110"
                    />
                </form>

                {posts && posts.length > 0 && (
                    <p className="text-center text-gray-900 dark:text-gray-300 mt-2 font-medium">
                        {posts.length} posts
                    </p>
                )}
            </div>

            {showLoading && (
                <p className="text-yellow-600 text-center mb-4">
                    Las solicitudes están tardando más de lo esperado...
                </p>
            )}

            {error && <p className="text-red-500 text-center mb-4">{error.message}</p>}

            {/* Masonry Grid Layout */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {posts?.map((post, index) => (
                    <div
                        key={post.id}
                        className="break-inside-avoid mb-6"
                    >
                        <Card post={post} />
                    </div>
                ))}
            </div>
        </main>

    );

}
