import { Card, CardContent, CardMedia } from "@mui/material";
import PhotoDescription from "../Description";

interface PhotoCardProps {
  photo: {
    id: string;
    url: string;
    description: string;
  };
  isCard: boolean;
}

const GridItem = ({ photo, isCard }: PhotoCardProps) => {
  return (
    <div data-testid="grid-item">
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={photo.url}
          alt={photo.description}
          sx={{ objectFit: "contain" }}
        />
        {isCard && (
          <CardContent>
           <PhotoDescription photo={photo} />
          </CardContent>
        )}
      </Card>
      </div>
  );
};

export default GridItem;
