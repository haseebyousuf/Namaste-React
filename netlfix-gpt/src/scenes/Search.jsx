import SearchBarContainer from "../components/SearchBarContainer";
import SuggestionsContainer from "../components/SuggestionsContainer";

const Search = () => {
  return (
    <div>
      <SearchBarContainer />
      <div className=''>
        <SuggestionsContainer />
      </div>
    </div>
  );
};

export default Search;
