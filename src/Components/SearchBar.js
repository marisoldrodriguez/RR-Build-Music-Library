import React, { useState } from 'react';

function SearchBar(props){
    // We can comment out our searchTerm state variable as we are not using it!
    // let [searchTerm, setSearchTerm] = useState('')

    return (
            <form>
                <input type="text" placeholder="Search Here"
                    onChange={
                        (e) => props.handleSearch(e, e.target.value)
                    } />
                <input type="submit" />
            </form>
    )
}

export default SearchBar
