import { useState } from "react";
import { findNthPrime } from "../utils/helper";
import { useMemo } from "react";
const Demo = () => {
  const [text, setText] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const prime = useMemo(() => findNthPrime(text), [text]);

  return (
    <div
      className={`p-2 m-4 border border-black w-96 h-96 ${
        isDark && "bg-gray-400"
      }`}
    >
      <h1>useMemo</h1>
      <button
        onClick={() => setIsDark(!isDark)}
        className='px-4 py-2 m-2 bg-green-500 rounded'
      >
        Dark Mode
      </button>
      <div>
        <input
          className='px-4 py-2 m-2 border border-red-600 rounded outline-red-600'
          name='text'
          placeholder='Enter here'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <h2 className='font-bold text-l'>Prime Number = {prime}</h2>
      </div>
    </div>
  );
};

export default Demo;
