import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { SearchBox } from './components/SearchBox'
import { BlogContainer, BlogPostsInfo, PostCards } from './styles'
import { BlogContext } from '../../contexts/BlogContext'
import { useContextSelector } from 'use-context-selector'

export function Blog() {
  // const { gitUser, issues } = useContext(BlogContext)
  const gitUser = useContextSelector(BlogContext, (context) => {
    return context.gitUser
  })

  const issues = useContextSelector(BlogContext, (context) => {
    return context.posts
  })

  return (
    <BlogContainer>
      <Profile gitUser={gitUser} />
      <BlogPostsInfo>
        <h1>Publicações</h1>
        <span>{issues.length} publicações</span>
      </BlogPostsInfo>
      <SearchBox />
      <PostCards>
        {issues.map((post) => (
          <Card key={post.number} post={post} />
        ))}
      </PostCards>
    </BlogContainer>
  )
}
