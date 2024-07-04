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

const Cards = ({ photos }: PhotoGridProps) => {
  return (
    <Container data-testid="photo-cards">
      <Grid container spacing={4}>
        {photos?.length ? photos.map((photo) => (
          <Grid item xs={12} sm={4} md={3} key={photo.id}>
            <GridItem photo={photo} isCard={true} />
          </Grid>
        )) : <p>No photos found</p>}
      </Grid>
    </Container>
  );
};

export default Cards;
