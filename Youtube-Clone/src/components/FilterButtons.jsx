import Button from "./Button";

const filterList = [
  "All",
  "Music",
  "Superhero Movies",
  "Javascript",
  "Computer Program",
  "News",
  "Tanmay Bhat",
  "Apple",
];
const FilterButtons = () => {
  return (
    <div className='flex w-4/5 gap-2'>
      {filterList.map((button, index) => {
        return (
          <div className='inline' key={index}>
            <Button name={button} />
          </div>
        );
      })}
    </div>
  );
};

export default FilterButtons;
