import { render } from '@testing-library/react';
import CarouselComponent from './index';
import { photoData } from '../../../mocks/photoData';

describe('CarouselComponent', () => {
  it('renders photos correctly', () => {
    const { getByTestId } = render(<CarouselComponent photos={photoData} />);
    const carouselContainer = getByTestId('photo-carousel');
    expect(carouselContainer).toBeInTheDocument();
  });
});
