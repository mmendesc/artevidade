import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import ReactGallery from 'react-grid-gallery';

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const Gallery = ({images}) => {
  const ref = useRef(null);

  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0;
    console.log('width', width);
  }, [ref.current]);

  return (
    <Container ref={ref} className="image-gallery">
      <ReactGallery
        images={images}
        enableImageSelection={false}
      />
    </Container>
  )
}

export default Gallery;