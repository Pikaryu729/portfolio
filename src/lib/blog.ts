import fs from 'fs'
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkHtml from "remark-html"
import { BlogPost } from '@/types/blog'

const postsDirectory = "content/posts"

export async function getPostBySlug(slug: string) {
    const fullPath = path.join(process.cwd(), postsDirectory,`${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const { data, content } = matter(fileContents)

    const processedContent = await remark().use(remarkHtml).process(content)

    return { slug, title: data.title, date: data.date, excerpt: data.excerpt, content: processedContent.toString() }
}

export async function getAllPosts(): Promise<BlogPost[]> {
    const fullPath = path.join(process.cwd(), postsDirectory)
    const fileNames = fs.readdirSync(fullPath)

    const allPostsData = await Promise.all(
        fileNames.filter((name) => name.endsWith(".mdx"))
            .map(async (fileName) => {
                const slug = fileName.replace(/\.mdx$/, '')

                const filePath = path.join(fullPath, fileName)
                const fileContents = fs.readFileSync(filePath, 'utf8')

                const { data, content } = matter(fileContents)

                return {
                    slug,
                    title: data.title,
                    date: data.date,
                    tags: data.tags,
                    excerpt: data.excerpt as string || content.slice(0, 150) + "..." // mini except
                }
            })
    )

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))

}
