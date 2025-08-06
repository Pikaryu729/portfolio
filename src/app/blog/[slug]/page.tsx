import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getPostBySlug } from "@/lib/blog";

export default async function BlogPost({params}: {params: {slug: string }}) {
    const {slug} = await params
    const post = await getPostBySlug(slug)

    return (
        <main>
        <section className="text-center">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <h2 className="text-muted-foreground">{post.date}</h2>
        </section>
        <article dangerouslySetInnerHTML={{__html: post.content}} className="dark:prose-invert prose prose-lg max-w-4xl mx-auto">
        </article>
        </main>
    )

}
