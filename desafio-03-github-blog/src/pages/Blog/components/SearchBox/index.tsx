import { useContext } from 'react'
import { SearchBoxContainer } from './styled'
import * as z from 'zod'
import { BlogContext } from '../../../../contexts/BlogContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const searchBoxSchema = z.object({
  query: z.string(),
})

type SearchBoxInputs = z.infer<typeof searchBoxSchema>

export function SearchBox() {
  const { fetchIssues } = useContext(BlogContext)

  const {
    register,
    handleSubmit,
    // formState: { isSubmitting },
  } = useForm<SearchBoxInputs>({
    resolver: zodResolver(searchBoxSchema),
  })

  async function handleSearchPosts(data: SearchBoxInputs) {
    await fetchIssues(data.query)
  }

  return (
    <SearchBoxContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchBoxContainer>
  )
}
