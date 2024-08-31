import { useEffect, useState } from 'react';

import { giphyApi } from './utils/giphyApi';
import { createRandomString } from './utils/randomString';
import GifGrid from './GifGrid';
import SearchBar from './SearchBar';

export default function App() {
  const [ searchInput, setSearchInput ] = useState('')
  const [ loading, setLoading ] = useState(false)
  const [ searchGifs, setSearchGifs ] = useState([])

  //fetch search gifs when search input changes
  useEffect(() => {
    //when search input less than 3 characters, search random gifs
    if(searchInput.length < 3) {
      const randomSearchTerm = createRandomString(3)
      setSearchInput(randomSearchTerm)
    }

    setLoading(true)
    giphyApi.search(searchInput, { limit: 10 })
      .then(result => {
        setSearchGifs(result.data)
      })
      .catch(error => {
        //TODO: show error on ui
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [searchInput])

  return (
    <div className='app'>
      <SearchBar loading={loading} searchCallback={setSearchInput} />
      <GifGrid gifs={searchGifs} />
    </div>
  );
}