import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: {
      id: 1,
      title: "Now Playing",
      data: null,
    },
    popularMovies: {
      id: 2,
      title: "Popular",
      data: null,
    },
    topRatedMovies: {
      id: 3,
      title: "Top Rated",
      data: null,
    },
    trendingTitles: {
      id: 4,
      title: "Trending",
      data: null,
    },
    trendingMovies: {
      id: 5,
      title: "Trending Movies",
      data: null,
    },
    trendingSeries: {
      id: 6,
      title: "Trending TV Shows",
      data: null,
    },
    nowPlayingSeries: {
      id: 7,
      title: "Now Playing",
      data: null,
    },
    popularSeries: {
      id: 8,
      title: "Popular",
      data: null,
    },
    topRatedSeries: {
      id: 9,
      title: "Top Rated",
      data: null,
    },
    gptSuggestedMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies.data = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies.data = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies.data = action.payload;
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
      state.nowPlayingSeries.data = action.payload;
    },
    addPopularSeries: (state, action) => {
      state.popularSeries.data = action.payload;
    },
    addTopRatedSeries: (state, action) => {
      state.topRatedSeries.data = action.payload;
    },
    addGptSuggestedMovies: (state, action) => {
      state.gptSuggestedMovies = action.payload;
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
  addGptSuggestedMovies,
  addTrailerVideo,
} = moviesSlice.actions;
export default moviesSlice.reducer;
