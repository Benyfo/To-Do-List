import { useState, type ChangeEvent, type MouseEvent } from "react";
import "./App.css";
import WelcomePage from "./components/WelcomePage";

function App() {
  const [count, setCount] = useState<number>(0);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(`Input value is ${event.currentTarget.value}!`);
  };

  const handleBtnClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(`btn with id: ${event.currentTarget.id} has targeted!`);
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <WelcomePage name="Benyamin" age={20} />

      <input
        className="bg-black placeholder-white p-2 rounded-lg mt-5 caret-red-600 text-white"
        type="text"
        placeholder="input value"
        onChange={handleInputChange}
      />

      <p className="my-5">Count : {count}</p>
      <button
        id="btn-increase-count"
        className="hover:bg-red-600 border-2 border-black hover:scale-105 transition-all duration-200"
        onClick={handleBtnClick}
      >
        Click me
      </button>
    </>
  );
}

export default App;
