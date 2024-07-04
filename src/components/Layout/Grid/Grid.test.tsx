import { render } from '@testing-library/react';
import PhotoGrid from './index';
import { photoData } from '../../../mocks/photoData';

describe('PhotoGrid', () => {
  it('renders photos correctly without description', () => {
    const { getByTestId,queryByTestId } = render(<PhotoGrid photos={photoData} />);

    const photoGridContainer = getByTestId('photo-grid');
    expect(photoGridContainer).toBeInTheDocument();

    expect(queryByTestId(`photo-description-${photoData[0].id}`)).toBeNull()
  });

  it('displays No photos foundwhen photos is empty', () => {
    const { getByText } = render(<PhotoGrid photos={[]} />);
    const noPhotosMessage = getByText('No photos found');
    expect(noPhotosMessage).toBeInTheDocument();
  });
});