import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import { useState } from "react";
import openapi from "../utils/openai";
import { GET_OPTIONS } from "../utils/constants";
import { addGptSuggestedMovies } from "../state/moviesSlice";

const SearchBarContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const fetchTMBDMovie = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/multi?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      GET_OPTIONS
    );
    const data = await response.json();
    return data.results.filter(
      (movie) => movie.poster_path && movie.backdrop_path
    )[0];
  };
  const identifier = useSelector((state) => state.config.lang);
  const handleSearchGpt = async () => {
    setIsLoading(true);
    const query =
      "Act as a Movie Recommendation System and suggest some movies for the query: " +
      searchText +
      ". Only give me names of 5 movies, seprated by two dollar signs '$$' like the example result given ahead. Example result: Movie1 $$ Movie2 $$ Movie3 $$ Movie4 $$ Movie5 ";
    const gptResult = await openapi.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    const gptMovies = gptResult.choices?.[0]?.message?.content.split("$$");
    const promiseArray = gptMovies.map((movie) => fetchTMBDMovie(movie));
    const suggestedMovies = await Promise.all(promiseArray);

    dispatch(addGptSuggestedMovies(suggestedMovies));
    setIsLoading(false);
  };
  return (
    <div className=' bg-fill bg-login-background'>
      <div className=' flex items-center justify-center h-screen bg-[rgba(0,0,0,.65)] '>
        <div className='flex flex-col items-center w-10/12 gap-2 -mt-10 sm:-mt-0 sm:w-1/2'>
          <h1 className='mb-10 text-2xl font-extrabold text-center text-white sm:text-5xl'>
            {lang[identifier].searchTitle}
          </h1>

          <div className='grid w-full grid-cols-12 gap-3 '>
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className='col-span-12 sm:col-span-9 h-12 text-sm sm:text-lg text-gray-300 px-4 py-2 rounded-[4px] bg-[#333] outline-none opacity-80 border border-grey-600 '
              placeholder={lang[identifier].searchGptPlaceholder}
            />
            <button
              onClick={handleSearchGpt}
              disabled={isLoading}
              className='font-extrabold text-white text-xl sm:text-lg col-span-12  sm:col-span-3 px-4 py-2 bg-[#e50914] rounded-[4px]'
            >
              {isLoading
                ? lang[identifier].pleaseWait
                : lang[identifier].search}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBarContainer;
