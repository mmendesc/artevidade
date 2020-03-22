import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import ReactGallery from 'react-grid-gallery';

const Gallery = ({images}) => {
  const ref = useRef(null);

  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0;
    console.log('width', width);
  }, [ref.current]);

  return (
    <div ref={ref} >
      <ReactGallery
        images={images}
        enableImageSelection={false}
      />
    </div>
  )
}

export default Gallery;