import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1> Oops!!!</h1>
      <h2> Something Went Wrong</h2>
      <p>
        {err.status} : {err.statusText}
      </p>
    </div>
  );
};

export default Error;
