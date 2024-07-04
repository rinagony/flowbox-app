import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPhotosStart, fetchPhotosSuccess } from '../store/photoSlice';
import { photoData } from '../mocks/photoData';

const useFetchPhotos = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchPhotosStart());
    //sumyklation api
      setTimeout(() => {
        dispatch(fetchPhotosSuccess(photoData));
      }, 1000);
    }, [dispatch]);
  };

export default useFetchPhotos;