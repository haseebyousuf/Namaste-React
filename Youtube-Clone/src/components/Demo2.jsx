import { useRef } from "react";
import { useState } from "react";

const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const z = useRef(0);
  return (
    <div className='p-2 m-4 border border-black h-96 w-96'>
      <h1>useRef</h1>
      <div>
        <button
          onClick={() => {
            x = x + 1;
            console.log("x = ", x);
          }}
          className='px-4 py-1 m-2 bg-green-500 rounded'
        >
          Increase x
        </button>
        <span>{x}</span>
      </div>
      <div>
        <button
          onClick={() => setY(y + 1)}
          className='px-4 py-1 m-2 bg-green-500 rounded'
        >
          Increase y
        </button>
        <span>{y}</span>
      </div>
      <div>
        <button
          onClick={() => {
            z.current = z.current + 1;
            console.log("Ref = ", z.current);
          }}
          className='px-4 py-1 m-2 bg-green-500 rounded'
        >
          Increase z
        </button>
        <span>{z.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
