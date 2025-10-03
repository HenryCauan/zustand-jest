import React, { useState } from "react";
import { useCount } from "./count/useCount";


const Store = () => {
  const { count, increment, decrement } = useCount();
  return (
    <>
      <main className="w-full h-screen flex flex-col items-center justify-center gap-8">
        <h1 className="text-2xl font-bold">Counting with zustand</h1>
        <p>{count}</p>
        <div className="flex gap-4">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </main>
    </>
  );
};

export default Store;
