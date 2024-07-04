import { CardMedia } from "@mui/material";
import styled from "styled-components";
import PhotoDescription from "../../Description";

interface ListProps {
  photos: {
    id: string;
    url: string;
    description: string;
  }[];
}

const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const List = ({photos}: ListProps) => {
  return (
    <div data-testid="photo-list">
      {photos?.length ? photos.map(photo => (
        <ListItem key={photo.id}>
          <CardMedia
          component="img"
          height="80"
          image={photo.url}
          alt={photo.description}
          sx={{ width: 'auto', marginRight: '2rem', objectFit: "contain" }}
        />
          <PhotoDescription photo={photo} />
        </ListItem>
      )) : <p>No photos found</p>}
    </div>
  );
};

export default List;