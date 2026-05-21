import fs from "fs"

const BASE_URL =
  "https://www.ccsssp.com/wp-json/wp/v2/posts"

async function fetchAllPosts() {
  let allPosts = []

  let page = 1

  let hasMore = true

  while (hasMore) {
    console.log(`Fetching page ${page}...`)

    try {
      const res = await fetch(
        `${BASE_URL}?per_page=100&page=${page}&_embed`
      )

      if (!res.ok) {
        hasMore = false
        break
      }

      const posts = await res.json()

      if (posts.length === 0) {
        hasMore = false
        break
      }

      const cleanedPosts = posts.map(
        (post: any) => ({
          id: post.id,

          slug: post.slug
  .normalize("NFKD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^\w\s-]/g, "")
  .toLowerCase()
  .trim()
  .replace(/\s+/g, "-"),

          date: post.date,

          title: post.title.rendered,

          excerpt:
            post.excerpt.rendered,

          content:
            post.content.rendered,

          featuredImage:
            post._embedded?.[
              "wp:featuredmedia"
            ]?.[0]?.source_url || null,

             author:
    post._embedded?.author?.[0]?.name || "Unknown",
        })
      )

      allPosts.push(...cleanedPosts)

      page++
    } catch (error) {
      console.error(error)

      hasMore = false
    }
  }

  fs.writeFileSync(
    "./data/posts.json",
    JSON.stringify(allPosts, null, 2)
  )

  console.log(
    `Saved ${allPosts.length} posts`
  )
}

fetchAllPosts()