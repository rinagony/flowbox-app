import { useState } from 'react';
import PhotoGrid from './Grid';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import List from './List';
import CarouselComponent from './Carousel';
import Cards from './Cards';
import CustomButton from '../Button';

enum LayoutOptions {
  Grid = 'grid',
  List = 'list',
  Carousel = 'carousel',
  Card = 'card',
}

const Layout = () => {
  const [layout, setLayout] = useState<LayoutOptions>(LayoutOptions.Grid);

  const photos = useSelector((state: RootState) => state.photos.photos);

  const renderLayout = () => {
    switch (layout) {
      case LayoutOptions.Grid:
        return <PhotoGrid photos={photos} />;
      case LayoutOptions.List:
        return <List photos={photos}/>;
      case LayoutOptions.Carousel:
        return <CarouselComponent photos={photos}/>;
      case LayoutOptions.Card:
        return <Cards photos={photos}/>;
      default:
        return null;
    }
  };

  return (
    <div data-testid="layout">
      <div>
        <CustomButton text='Grid View' onClick={() => setLayout(LayoutOptions.Grid)}/>
        <CustomButton text='List View' onClick={() => setLayout(LayoutOptions.List)}/>
        <CustomButton text='Carousel View' onClick={() => setLayout(LayoutOptions.Carousel)}/>
        <CustomButton text='Card View' onClick={() => setLayout(LayoutOptions.Card)}/>
      </div>
      {renderLayout()}
    </div>
  );
};

export default Layout;