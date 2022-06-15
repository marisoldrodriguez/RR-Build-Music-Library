import React, { useContext } from 'react';
import { SearchContext } from '../Context/SearchContext'

function SearchBar(){
    const {term, handleSearch} = useContext(SearchContext)
    // We can comment out our searchTerm state variable as we are not using it!
    // let [searchTerm, setSearchTerm] = useState('')

    return (
            <form>
                <input ref={term} type="text" placeholder="Search Here"
                    onChange={
                        (e) => handleSearch(e, term.current.value)
                    } />
                <input type="submit" />
            </form>
    )
}

export default SearchBar
