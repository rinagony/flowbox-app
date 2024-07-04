import { render } from '@testing-library/react';
import GridItem from './index'
import { photoData } from '../../mocks/photoData';

describe('GridItem', () => {

  it('renders correctly without description when isCard is false', () => {
    const { container, queryByText } = render(<GridItem photo={photoData[0]} isCard={false} />);
    
    const image = container.querySelector('img');
    expect(image).toBeInTheDocument();

    const description = queryByText(photoData[0].description);
    expect(description).toBeNull();
  });
});