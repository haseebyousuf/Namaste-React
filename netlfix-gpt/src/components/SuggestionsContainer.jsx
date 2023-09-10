import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SuggestionsContainer = () => {
  const gptSuggestedMovies = useSelector(
    (state) => state.movies.gptSuggestedMovies
  );
  return (
    <div className='sm:flex sm:justify-center'>
      {gptSuggestedMovies && (
        <div className='px-6 pb-6 -mt-64 h-fit sm:-mt-56 bg-gradient-to-r from-black'>
          <MoviesList title='Suggestions' movies={gptSuggestedMovies} />
        </div>
      )}
    </div>
  );
};

export default SuggestionsContainer;
