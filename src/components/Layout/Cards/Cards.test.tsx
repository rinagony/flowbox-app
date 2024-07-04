import { render } from '@testing-library/react';
import Cards from './index';
import { photoData } from '../../../mocks/photoData';

describe('Cards component', () => {
  it('renders photos correctly', () => {
    const { getByTestId, getAllByTestId } = render(<Cards photos={photoData} />);

    const containerElement = getByTestId('photo-cards');
    expect(containerElement).toBeInTheDocument();
    const gridElemEnets = getAllByTestId('grid-item');
    expect(gridElemEnets.length).toBe(photoData.length);

    photoData.forEach((photo) => {
      const photoDescription = getByTestId(`photo-description-${photo.id}`);
      expect(photoDescription).toBeInTheDocument();
      expect(photoDescription.textContent).toBe(photo.description);
    });
  });

  it('renders No photos found meSsage when no photos provided', () => {
    const { getByText } = render(<Cards photos={[]} />);
    const noPhotosMessage = getByText('No photos found');
    expect(noPhotosMessage).toBeInTheDocument();
  });
});