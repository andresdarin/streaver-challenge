import { Post } from "@/types/post";



export class PostsAPI {
    private baseUrl = 'https://jsonplaceholder.typicode.com';

    async getAllPosts(): Promise<Post[]> {
        const res = await fetch(`${this.baseUrl}/posts`);
        if (!res.ok) throw new Error("Error al traer posts");
        return res.json();
    }
}