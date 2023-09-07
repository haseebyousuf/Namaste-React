import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    trendingTitles: {
      id: 1,
      title: "Trending",
      data: null,
    },
    trendingMovies: {
      id: 2,
      title: "Trending Movies",
      data: null,
    },
    trendingSeries: {
      id: 3,
      title: "Trending TV Shows",
      data: null,
    },
    nowPlayingSeries: null,
    popularSeries: null,
    topRatedSeries: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrendingTitles: (state, action) => {
      state.trendingTitles.data = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies.data = action.payload;
    },
    addTrendingSeries: (state, action) => {
      state.trendingSeries.data = action.payload;
    },
    addNowPlayingSeries: (state, action) => {
      state.nowPlayingSeries = action.payload;
    },
    addPopularSeries: (state, action) => {
      state.popularSeries = action.payload;
    },
    addTopRatedSeries: (state, action) => {
      state.topRatedSeries = action.payload;
    },

    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addTrendingTitles,
  addTrendingMovies,
  addTrendingSeries,
  addNowPlayingSeries,
  addPopularSeries,
  addTopRatedSeries,
  addTrailerVideo,
} = moviesSlice.actions;
export default moviesSlice.reducer;
