import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Layout from './index';
import store from '../../store';

describe('Layout', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders layout buttons and default grid view', () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Layout />
      </Provider>
    );

    expect(getByText('Grid View')).toBeInTheDocument();
    expect(getByText('List View')).toBeInTheDocument();
    expect(getByText('Carousel View')).toBeInTheDocument();
    expect(getByText('Card View')).toBeInTheDocument();
    expect(getByTestId('photo-grid')).toBeInTheDocument();
  });

  it('renders list view after clik List View button', () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Layout />
      </Provider>
    );

    fireEvent.click(getByText('List View'));
    expect(getByTestId('photo-list')).toBeInTheDocument();
  });


  it('renders carousel view after click Carousel View button', () => {

    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Layout />
      </Provider>
    );

    fireEvent.click(getByText('Carousel View'));
    expect(getByTestId('photo-carousel')).toBeInTheDocument();
  });

  it('renders card view after clicking Card View button', () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Layout />
      </Provider>
    );
    fireEvent.click(getByText('Card View'));
    expect(getByTestId('photo-cards')).toBeInTheDocument();
  });
});