export const GET_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMBD_ACCESS_TOKEN}`,
  },
};

export const TMBD_IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
