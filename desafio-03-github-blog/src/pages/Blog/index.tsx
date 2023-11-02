import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { SearchBox } from './components/SearchBox'
import { BlogContainer, BlogPostsInfo, PostCards } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <BlogPostsInfo>
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </BlogPostsInfo>
      <SearchBox />
      <PostCards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </PostCards>
    </BlogContainer>
  )
}
