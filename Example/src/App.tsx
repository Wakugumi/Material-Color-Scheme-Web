import { useCallback, useState } from "react";
import "./App.css";
import { colorGenerator, argbToHex } from "./colorGenerator.tsx";

function App() {
  const [count, setCount] = useState<number>(0);

  const [input, setInput] = useState<string>("");
  const [colors, setColors] = useState<Record<string, string>>({});

  /**
   * Button handler to generate color
   */
  const generateColor = () => {
    const theme = colorGenerator(input);

    console.log(theme);

    // this is basically mapping from Record<string, number> to Record<string, string> with transformation happening on the value entry
    // Converts the color number to hex string
    const obj = Object.fromEntries(
      Object.entries(theme).map(([key, value]) => [key, argbToHex(value)]),
    );
    console.log(obj);
    setColors(obj);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center gap-4">
        <input
          type="color"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <span className="text-lg">{input}</span>
        <button
          onClick={generateColor}
          className={`bg-[#${input}] text-white px-4 py-2 rounded`}
        >
          Generate Color
        </button>
      </div>

      <div className="flex flex-col items-stretch justify-start gap-4 max-h-[400px] overflow-y-scroll">
        {Object.entries(colors).map((value, index) => (
          <div
            className={`p-4 flex flex-row items-center justify-between gap-8`}
            key={index}
          >
            <span
              className={`h-[2rem] w-[2rem] rounded`}
              style={{ backgroundColor: value[1] }}
            ></span>
            <span>
              {value[0]} | {value[1]}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
