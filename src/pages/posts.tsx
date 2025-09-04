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
            <div className="min-w-full rounded-2xl p-4 shadow mb-4 group w-full bg-gradient-to-r from-green-100 via-blue-50 to-orange-100">
                <h1 className="text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500
                           transition-all duration-500 cursor-default hover:from-pink-400 hover:via-purple-500 hover:to-blue-400
                           hover:scale-105">Posts X-plorer</h1>
                <p className="text-center text-gray-700 dark:text-gray-400 mt-1">
                    Check out the most interesting posts and daily discoveries.
                </p>


                <form className="p-4 flex justify-center">
                    <label htmlFor="user-search" className="sr-only">Filtrar por userId</label>
                    <input
                        type="number"
                        id="user-search"
                        placeholder="Filtrar por userId..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-4 text-sm text-gray-500 placeholder-gray-400 bg-gray-250/50 border rounded-2xl border-purple-400 focus:text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:brightness-110"
                    />
                </form>

                {/* Mensaje cuando no hay posts */}
                {!isLoading && posts && posts.length === 0 && (
                    <>
                        {debouncedUserId ? (
                            <p className="w-full pb-3 text-center text-red-500 dark:text-red-400 mt-2 font-medium">
                                Looks like this user hasn’t posted anything.
                            </p>
                        ) : (
                            <p className="w-full pb-3 text-center text-red-500 dark:text-red-400 mt-2 font-medium">
                                No posts to show yet.
                            </p>
                        )}
                    </>
                )}

                {showLoading && (
                    <div>
                        <p className="w-full pb-3 text-center text-gray-800 mt-2 font-medium">
                            Almost there… your feed will be ready soon!
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="h-40 bg-gray-200 animate-pulse rounded-xl"></div>
                            ))}
                        </div>
                    </div>
                )}


                {posts && posts.length > 0 && (
                    <p className="text-center text-gray-900 dark:text-gray-300 mt-2 font-medium">
                        {posts.length} posts
                    </p>
                )}
            </div>

            {error && <p className="text-red-500 text-center mb-4">{error.message}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts?.map((post, index) => (
                    <div
                        key={post.id}
                        className="break-inside-avoid"
                    >
                        <Card post={post} />
                    </div>
                ))}
            </div>
        </main>

    );

}
