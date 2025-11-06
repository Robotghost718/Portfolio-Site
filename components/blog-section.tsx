'use client'

import { useEffect, useState } from 'react'
import { BlogPost, BLOG_POSTS } from '@/app/data'
import { getBlogs } from '@/lib/blog'

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadPosts() {
      try {
        const ghostPosts = await getBlogs()
        console.log('Ghost posts fetched:', ghostPosts)
        if (ghostPosts && ghostPosts.length > 0) {
          console.log('Using Ghost posts')
          setPosts(ghostPosts)
        } else {
          console.log('No Ghost posts, using fallback')
        }
      } catch (error) {
        console.error('Failed to load Ghost posts:', error)
        // Falls back to BLOG_POSTS
      } finally {
        setIsLoading(false)
      }
    }
    loadPosts()
  }, [])

  return posts
}
