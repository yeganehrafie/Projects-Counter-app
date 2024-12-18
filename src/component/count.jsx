import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mt-40 font-sans">
        <div className="title">
          <h1 className="flex justify-center text-4xl font-bold tracking-wider text-neutral-800">
            شمارنده
          </h1>
        </div>
        <div className="content mt-10 flex justify-center text-center items-center font-semibold text-slate-50 text-sm">
          <button
            className="mx-10 border-0 bg-green-500 p-3 rounded shadow-lg delay-100  hover:bg-green-400 "
            type="button"
            onClick={() => setCount(count + 1)}
          >
            افزایش شمارنده
          </button>
          <button
            className="bg-blue-500 p-3 border-0 rounded shadow-lg  delay-100 hover:bg-blue-400 "
            type="button"
            onClick={() => setCount(count - 1)}
          >
            کاهش شمانده
          </button>
          <button
            className="mx-10 border-0 bg-red-500 p-3 rounded shadow-lg  delay-100 hover:bg-red-400 "
            type="button"
            onClick={() => setCount(0)}
          >
            حذف شمارنده
          </button>
        </div>
        <div className="conut mt-6 flex justify-center text-center text-slate-50 text-sm font-semibold">
          <span className="bg-yellow-500 p-3 border-0 rounded-full shadow-lg">
            تعداد: {count}
          </span>
        </div>
      </div>
    </>
  );
};
export default Counter;
