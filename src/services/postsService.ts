import { Post } from "@/types/post";



export class PostsAPI {
    private baseUrl = 'https://jsonplaceholder.typicode.com';

    async getAllPosts(): Promise<Post[]> {
        const res = await fetch(`${this.baseUrl}/posts`);
        if (!res.ok) throw new Error("Error al traer posts");
        return res.json();
    }

    async getPostsByUserId(userId: string): Promise<Post[]> {
        const res = await fetch(`${this.baseUrl}/posts?userId=${userId}`);
        if (!res.ok) throw new Error("Error al filtrar posts");
        return res.json();
    }
}

// Fetcher para SWR
export const fetchPosts = async (url: string): Promise<Post[]> => {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Error al traer posts");
    return res.json();
};