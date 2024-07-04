import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { PhotoData } from "../../../interfaces";
import styled from "styled-components";
import lodash from "lodash";
import PhotoDescription from "../../Description";
import React from "react";

interface CarouselProps {
  photos: PhotoData[];
}

const CarouselItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const CarouselImage = styled.img`
  max-height: 30rem;
  width: auto !important;
`;

const CarouselComponent = ({ photos }: CarouselProps) => {
  const chunkedPhotos = lodash.chunk(photos, 3);

  const settings = {
    infiniteLoop: true,
    showThumbs: false,
    showIndicators: true,
    showStatus: false,
    swipeable: true,
  };

  return (
    <div data-testid="photo-carousel">
      <Carousel {...settings}>
        {chunkedPhotos.map((photoChunk, index) => (
          <CarouselItem key={index}>
            {photoChunk.map((photo) => (
              <React.Fragment key={photo.id}>
                <CarouselImage src={photo.url} alt={photo.description} />
                <PhotoDescription photo={photo} />
              </React.Fragment>
            ))}
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
