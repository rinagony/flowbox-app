import { render } from '@testing-library/react';
import List from './index';
import { photoData } from '../../../mocks/photoData';

describe('List', () => {
  it('renders photos correctly', () => {
    const { getByTestId } = render(<List photos={photoData} />);

    const photoListContainer = getByTestId('photo-list');
    expect(photoListContainer).toBeInTheDocument();

    const photoDescription = getByTestId(`photo-description-${photoData[0].id}`);
    expect(photoDescription).toBeInTheDocument();
  });

  it('displays No photos found when photos is empty', () => {
    const { getByText } = render(<List photos={[]} />);
    const noPhotosMessage = getByText('No photos found');
    expect(noPhotosMessage).toBeInTheDocument();
  });
});