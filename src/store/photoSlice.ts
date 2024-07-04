import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PhotoData } from '../interfaces';

interface PhotoState {
    photos: PhotoData[];
    loading: boolean;
}

const initialState: PhotoState = {
    photos: [],
    loading: false
};

const photoSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
      fetchPhotosStart(state) {
        state.loading = true;
      },
      fetchPhotosSuccess(state, action: PayloadAction<PhotoData[]>) {
        state.photos = action.payload;
        state.loading = false;
      },
      fetchPhotosFailure(state) {
        state.loading = false;
      },
    },
});

export const { fetchPhotosStart, fetchPhotosSuccess, fetchPhotosFailure } = photoSlice.actions;

export default photoSlice.reducer;