/* eslint-disable react/prop-types */
import MoviesList from "./MoviesList";

const PageBody = ({ allCategories }) => {
  return (
    <div className='pt-44 sm:pt-0 bg-black sm:bg-[#141414] w-screen pl-6 sm:pl-24 pb-10'>
      <div className='relative -mt-16 sm:z-40 sm:-mt-40'>
        {allCategories.map((category) => (
          <MoviesList
            key={category.id}
            title={category.title}
            movies={category.data}
          />
        ))}
      </div>
    </div>
  );
};

export default PageBody;
