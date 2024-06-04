import "./App.css";
import Dice from "./images/icon-dice.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Desktop from "./images/pattern-divider-desktop.svg";
import Mobile from "./images/pattern-divider-mobile.svg";

function App() {
  const [advice, setAdvice] = useState({
    id: "",
    advice: "",
  });

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const response = await axios.get("https://api.adviceslip.com/advice");
        setAdvice(response.data.slip);
        console.log(response.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchAdvice();
  }, []);

  const handleAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(response.data.slip);
      console.log(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <div className="w-screen h-screen bg-[#202632] grid justify-center items-center">
        <div className="relative bg-[#313A49] rounded-xl xl:w-[700px] xl:h-[400px] w-[350px] h-[350px]">
          <div className="flex flex-col items-center justify-between xl:py-8 py-6 xl:h-[350px] h-[300px]">
            <div className="uppercase font-semibold text-[#78EABF] tracking-[3px]">
              advice #{advice.id}
            </div>
            <div className="text-[#D2E0EB] text-3xl font-semibold px-4 py-4 text-center">
              "{advice.advice}"
            </div>
            <div className="hidden xl:block">
              <img src={Desktop} alt="" />
            </div>
            <div className="xl:hidden block">
              <img src={Mobile} alt="" />
            </div>
          </div>
          <button
            className="absolute bottom-[-40px] xl:right-[319px] right-[144px] z-10 bg-[#55FEAA] 
            rounded-full w-16 h-16 flex justify-center items-center hover:shadow-[0_1px_30px_5px] hover:shadow-[#55FEAA]"
          >
            <img src={Dice} alt="" onClick={handleAdvice} />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
