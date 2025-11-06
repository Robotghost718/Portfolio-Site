import { getGhostPosts, type GhostPost } from '@/lib/ghost'

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

export async function getBlogs(): Promise<BlogPost[]> {
  // Check if Ghost is configured
  if (!process.env.NEXT_PUBLIC_GHOST_URL || !process.env.NEXT_PUBLIC_GHOST_CONTENT_KEY) {
    console.warn('Ghost CMS not configured. Using fallback blog posts.')
    return []
  }

  try {
    const posts = await getGhostPosts()
    return posts.map((post: GhostPost) => ({
      title: post.title,
      description: post.excerpt || 'No description available',
      link: post.url || `/blog/${post.slug}`,
      uid: post.id,
    }))
  } catch (error) {
    console.error('Failed to fetch Ghost posts:', error)
    return []
  }
}
