import { useTheme } from "./theme/useTheme.tsx";

const WebApp = () => {
  const { color, themeBlack, themeWhite } = useTheme();

  return (
    <>
      <main className={`w-full h-screen flex flex-col items-center justify-center gap-8 ${color === "black" ? 'bg-black text-white' : "bg-gray-200 text-black"}`}>
        <h1>Change page color</h1>
        <p>This page are is {color}</p>
        <div className="flex gap-4">
          <button onClick={themeBlack}>Black</button>
          <button onClick={themeWhite}>White</button>
        </div>
      </main>
    </>
  );
};

export default WebApp;
