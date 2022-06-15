import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function AlbumView() {
    const { id } = useParams()
    const [Albumdata, setAlbumData] = useState([])

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Album Data Goes Here!</p>
        </div>
    )
}

export default AlbumView