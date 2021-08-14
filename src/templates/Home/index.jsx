import { useEffect, useState, useCallback } from 'react'

import './styles.css'

import { Posts } from '../../components/Posts'
import {loadPosts} from '../../utils/loadPosts'
import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'

const Home = () => {

  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [page, setPage] = useState(0)
  const [postsPerPage] = useState(2)
  const [searchValue, setSearchValue] = useState('')

  const handleLoadPosts = useCallback (async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts()
    
    setAllPosts(postsAndPhotos)
    setPosts(postsAndPhotos.slice(page, postsPerPage))
  }, [])

  useEffect(() => {
    handleLoadPosts(0, postsPerPage)
  },[handleLoadPosts, postsPerPage])
  
  const loadMorePosts = () => {

    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage+postsPerPage)

    posts.push(...nextPosts)

    setPosts(posts)
    setPage(nextPage)
  }

  const handleChange = (e) =>{
    const { value } = e.target
    setSearchValue(value)
  }

  const noMorePosts = page + postsPerPage >= allPosts.length

  const filteredPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
    :
      posts

  return(
    <section className='container'>
        
        <div className='search-container'>
          {!!searchValue && (
              <h1> Search Value: {searchValue} </h1>
          )}
          <TextInput 
            searchValue={searchValue} 
            handleChange={handleChange}
          />
        </div>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts}/>
        )}

        {filteredPosts.length === 0 && (
          <p>O termo buscado não existe nos posts. =/</p>
        )}

        <div className='button-container'>
          {!searchValue && (
            <Button 
              text='Load more posts'
              onClick={loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
  )
}

export default Home