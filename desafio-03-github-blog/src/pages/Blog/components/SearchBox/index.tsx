import { SearchBoxContainer } from './styled'
import * as z from 'zod'
import { BlogContext } from '../../../../contexts/BlogContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'

const searchBoxSchema = z.object({
  query: z.string(),
})

type SearchBoxInputs = z.infer<typeof searchBoxSchema>

export function SearchBox() {
  // const { fetchPosts } = useContext(BlogContext)
  const fetchPosts = useContextSelector(BlogContext, (context) => {
    return context.fetchPosts
  })

  const {
    register,
    handleSubmit,
    // formState: { isSubmitting },
  } = useForm<SearchBoxInputs>({
    resolver: zodResolver(searchBoxSchema),
  })

  async function handleSearchPosts(data: SearchBoxInputs) {
    await fetchPosts(data.query)
  }

  return (
    <SearchBoxContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchBoxContainer>
  )
}
