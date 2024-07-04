import { Grid } from "@mui/material";
import styled from "styled-components";
import GridItem from "../../GridItem";

const Container = styled.div`
  padding-top: 2rem;
`;
interface PhotoGridProps {
  photos: {
    id: string;
    url: string;
    description: string;
  }[];
}

const PhotoGrid = ({ photos }: PhotoGridProps) => {
  return (
    <Container data-testid="photo-grid">
      <Grid container spacing={4}>
        {photos?.length ? photos.map((photo) => (
          <Grid item xs={12} sm={4} md={3} key={photo.id}>
            <GridItem photo={photo} isCard={false} />
          </Grid>
        )) : <p>No photos found</p>}
      </Grid>
    </Container>
  );
};

export default PhotoGrid;
