import { getAllPosts } from "@/lib/blog";
import { Sparkle } from "lucide-react";
import { BlogPost } from "@/types/blog";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default async function BlogPage() {
    const blogPosts: BlogPost[] = await getAllPosts();
    const latestBlogPosts = blogPosts.slice(0, 5);

    return (
        <main className="flex flex-col">
            <h1 className="text-4xl text-center">Latest posts</h1>
            <Separator className="mx-auto my-4 max-w-sm"/>
            <div className="flex justify-center">
            <ul className="max-w-md">
                {latestBlogPosts.map((post) => (
                    <li key={post.slug} >
                        <Link href={`/blog/${post.slug}`} className="flex rounded-md hover:text-primary p-2">
                            <Sparkle className="mr-2" />
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
            </div>
        </main>
    );
}
