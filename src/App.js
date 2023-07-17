import "./App.scss";
// import TestImage from "./Components/TestImage";
// import TimeLine from "./Components/TimeLine";
import Intro from "./Pages/Intro";
import Header from "./Components/Header";
import { useEffect, useRef, useState } from "react";
import Main from "./Pages/Main";
import TechStack from "./Pages/TechStack";
import Dots from "./Components/Dots";
import useWheelHandler from "./hooks/useWheelHandler";
import Test from "./Pages/Test";
import OutTro from "./Pages/OutTro";

function App() {
  // const [scroll, setScroll] = useState(true);
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);

  useWheelHandler(outerDivRef, setScrollIndex);

  return (
    <>
      <Header scrollIndex={scrollIndex} />
      <div className="outer" ref={outerDivRef}>
        <Dots scrollIndex={scrollIndex} />
        <section id="section1">
          <Intro scrollIndex={scrollIndex} />
        </section>
        <div className="divider" />
        <section id="section2">
          <Main />
        </section>
        <div className="divider" />
        <section id="section3">
          <TechStack />
        </section>
        <section id="section4">
          <Test />
        </section>
        <section id="section5">
          <OutTro />
        </section>
      </div>
    </>
  );
}

export default App;
