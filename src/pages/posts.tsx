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
        <main className="max-w-5xl mx-auto p-4 ">
            <h1 className="text-7xl font-bold mb-6 text-center">Posts</h1>

            <div className="mb-8 p-4 flex justify-center">
                <form className="w-full max-w-xl">
                    <label
                        htmlFor="user-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Filtrar por userId
                    </label>
                    <div className="relative">
                        {/* Icono lupa */}
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>

                        {/* Input controlado */}
                        <input
                            type="number"
                            id="user-search"
                            placeholder="Filtrar por userId..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 
                   rounded-lg focus:ring-blue-500 focus:border-blue-500
                    dark:border-gray-600 dark:placeholder-gray-400 
                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                </form>
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
