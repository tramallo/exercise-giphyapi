import { useMemo, useEffect } from "react"
import debounce from "lodash.debounce"

import LoadingIcon from "./LoadingIcon"
import SearchIcon from "./SearchIcon"

export default function SearchBar({ loading, searchCallback }) {

    //await 500 millis after user input to perform search
    const debounceSearchInput = useMemo(() => {
        const handleInputChange = (event) => {
            const searchTerm = event.target.value
            searchCallback(searchTerm)
        }

        return debounce(handleInputChange, 500)
    }, [searchCallback])
    //cancel debounce execution when component unmounts
    useEffect(() => { return () => debounceSearchInput.cancel() })

    return (
        <div className='search_bar'>
            <input type='text' className='search_input' onChange={debounceSearchInput} />
            <div className='search_indicator'>
                { loading ? <LoadingIcon /> : <SearchIcon /> }
            </div>
      </div>
    )
}