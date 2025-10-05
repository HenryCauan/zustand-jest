import { useCount } from "./count/useCount";


const Store = ({ changeIn, changeDe }: any) => {
  const { count, increment, decrement } = useCount();
  
  // Use a prop se for fornecida, caso contrário use a função do hook
  const handleIncrement = changeIn ? changeIn : increment;
  const handleDecrement = changeDe ? changeDe : decrement;
  
  return (
    <>
      <main className="w-full h-screen flex flex-col items-center justify-center gap-8">
        <h1 className="text-2xl font-bold">Counting with zustand</h1>
        <p id="count">{count}</p>
        <div className="flex gap-4">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      </main>
    </>
  );
};

export default Store;
