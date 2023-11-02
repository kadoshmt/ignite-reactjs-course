import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

export interface GitUser {
  login: string
  html_url: string
  name: string
  company?: string
  bio?: string
  followers?: number
}

export interface Issue {
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
  issues: Issue[]
  fetchIssues: (query?: string) => Promise<void>
  fetchPost: (id: string) => Promise<Issue>
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [gitUser, setGitUser] = useState<GitUser>()
  const [issues, setIssues] = useState<Issue[]>([])
  // const [issue, setIssue] = useState<Issue>()
  const repo = 'reactjs-github-blog-challenge'
  const owner = 'rocketseat-education'

  const fetchGitUserInfo = useCallback(async () => {
    const response = await api.get('users/kadoshmt')
    setGitUser(response.data)
  }, [])

  const fetchIssues = useCallback(async (query?: string) => {
    const repo = 'reactjs-github-blog-challenge'
    const user = 'rocketseat-education'
    const response = await api.get('/search/issues', {
      params: {
        q: `${query} repo:${user}/${repo}`,
      },
    })
    setIssues(response.data.items)
  }, [])

  async function fetchPost(id: string) {
    const url = `/repos/${owner}/${repo}/issues/${id}`
    const response = await api.get(url)
    return response.data
  }

  useEffect(() => {
    fetchGitUserInfo()
  }, [])

  useEffect(() => {
    fetchIssues('')
  }, [fetchIssues])

  return (
    <BlogContext.Provider value={{ gitUser, issues, fetchIssues, fetchPost }}>
      {children}
    </BlogContext.Provider>
  )
}
