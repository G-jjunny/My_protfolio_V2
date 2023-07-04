import "./App.scss";
import TestImage from "./Components/TestImage";
import TimeLine from "./Components/TimeLine";
import Intro from "./Pages/Intro";
import Header from "./Components/Header";
import { useEffect, useRef, useState } from "react";
import Main from "./Pages/Main";
import TechStack from "./Pages/TechStack";
import Dots from "./Components/Dots";
import useWheelHandler from "./hooks/useWheelHandler";

function App() {
  const [scroll, setScroll] = useState(true);
  // const outerDivRef = useRef();
  // const [scrollIndex, setScrollIndex] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 0일때 true값을 useState에 넣어줌
      if (window.scrollY === 0) {
        setScroll(true);
        // console.log(scroll);
      } else {
        // 스크롤이 0보다 클 때
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // console.log(outerDivRef);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  // useWheelHandler(outerDivRef, setScrollIndex);

  return (
    <>
      <Header scroll={scroll} />
      {/* <div className="outer" ref={outerDivRef}> */}
      {/* <Dots scrollIndex={scrollIndex} /> */}
      <section id="section1">
        <Intro scroll={scroll} />
      </section>
      <div className="divider" />
      <section id="section2">
        <Main />
      </section>
      <div className="divider" />
      <section id="section3">
        <TechStack />
      </section>
      {/* </div> */}
    </>
  );
}

export default App;
