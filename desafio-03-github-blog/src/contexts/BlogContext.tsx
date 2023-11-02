import { ReactNode, useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'

export interface GitUser {
  login: string
  html_url: string
  name: string
  company?: string
  bio?: string
  followers?: number
}

export interface Post {
  title: string
  url: string
  html_url: string
  number: number
  body: string
  comments: number
  created_at: string
  user: {
    login: string
  }
}

interface BlogContextType {
  gitUser?: GitUser
  posts: Post[]
  fetchPosts: (query?: string) => Promise<void>
  fetchPost: (id: string) => Promise<Post>
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [gitUser, setGitUser] = useState<GitUser>()
  const [posts, setPosts] = useState<Post[]>([])
  // const [issue, setIssue] = useState<Issue>()
  const repo = 'reactjs-github-blog-challenge'
  const owner = 'rocketseat-education'

  const fetchGitUserInfo = useCallback(async () => {
    const response = await api.get('users/kadoshmt')
    setGitUser(response.data)
  }, [])

  const fetchPosts = useCallback(async (query?: string) => {
    const repo = 'reactjs-github-blog-challenge'
    const user = 'rocketseat-education'
    const response = await api.get('/search/issues', {
      params: {
        q: `${query} repo:${user}/${repo}`,
      },
    })
    setPosts(response.data.items)
  }, [])

  async function fetchPost(id: string) {
    const url = `/repos/${owner}/${repo}/issues/${id}`
    const response = await api.get(url)
    return response.data
  }

  useEffect(() => {
    fetchGitUserInfo()
    fetchPosts('')
  }, [fetchGitUserInfo, fetchPosts])

  return (
    <BlogContext.Provider value={{ gitUser, posts, fetchPosts, fetchPost }}>
      {children}
    </BlogContext.Provider>
  )
}
