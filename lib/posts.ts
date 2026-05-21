import rawPosts from "@/data/posts.json"
import { Post } from "@/types/post"

const posts = rawPosts as Post[]

export function getPosts(): Post[] {
  return posts
}

export function getPost(
  slug: string
): Post | undefined {
  return posts.find(
    (post) => post.slug === slug
  )
}