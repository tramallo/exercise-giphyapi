import { useEffect, useState } from 'react';

import { giphyApi } from './giphyApi';
import GifGrid from './GifGrid';
import SearchBar from './SearchBar';

export default function App() {
  const [ searchInput, setSearchInput ] = useState('')
  const [ loading, setLoading ] = useState(false)
  const [ trendingGifs, setTrendingGifs ] = useState([])
  const [ searchGifs, setSearchGifs ] = useState([])

  //fetch trending gifs on startup
  useEffect(() => {
    setLoading(true)
    giphyApi.trending({ limit: 10 })
      .then(result => {
        setTrendingGifs(result.data)
      })
      .catch(error => {
        //TODO: show error on ui
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  //fetch search gifs when search input changes
  useEffect(() => {
    if(searchInput.length < 3) {
      //ignore when input is less that 3 characters
      return
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
      {searchInput.length >= 3
        ? <GifGrid gifs={searchGifs} />
        : <GifGrid gifs={trendingGifs} />
      }
    </div>
  );
}