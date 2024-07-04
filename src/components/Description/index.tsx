import Typography from '@mui/material/Typography';
import { PhotoData } from '../../interfaces';

interface PhotoDescriptionProps {
  photo: PhotoData;
}

const PhotoDescription = ({ photo }: PhotoDescriptionProps) => {
  return (
    <Typography
      gutterBottom
      sx={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
      }}
      component="div"
      data-testid={`photo-description-${photo.id}`}
    >
      {photo.description}
    </Typography>
  );
};

export default PhotoDescription;