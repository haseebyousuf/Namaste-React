import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className='p-2 flex flex-col items-center justify-center'>
      <h1 className='text-6xl'> Oops!!!</h1>
      <h2 className='text-2xl p-2'> Something Went Wrong</h2>
      <p className='text-2xl p-2'>
        {err.status} : {err.statusText}
      </p>
    </div>
  );
};

export default Error;
