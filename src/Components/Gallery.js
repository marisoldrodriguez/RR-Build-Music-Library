import React, { useContext } from 'react';
import GalleryItem from './GalleryItem';
import { DataContext } from '../Context/DataContext';

function Gallery() {

    const data = useContext(DataContext)

    const display = data.map((item, index) => {
        return (
            <GalleryItem key={index} item={item}  />
        )
    })

  return (
    <div>
        {display}
    </div>
  )
}

export default Gallery