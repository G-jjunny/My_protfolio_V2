import React, { useState } from "react";
import { styled } from "styled-components";
import Moon from "../Image/moon2.png";
import BgLeft from "../Image/bg-left.png";
import Cloud from "../Image/cloud2.png";
import "./Intro.scss";
import TypingAnimation from "../hooks/TypingAnimation";

const Main = styled.div`
  position: relative;
  .filter {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--main-color);
    opacity: 0.5;
  }
`;
const IntroArea = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  color: var(--main-white);
  display: flex;
  .text {
    opacity: 1;
    font-weight: 800;
    font-size: 3rem;
    display: inline-block;
    margin: auto;
    text-shadow: 0px 0px 10px #ffffff;
    text-align: center;
    .sub {
      font-size: 1.5rem;
      font-weight: 400;
      text-shadow: none;
      margin-top: 1.5rem;
    }
  }
  @media screen and (max-width: 500px) {
    .text {
      font-size: 1.5rem;
      .sub {
        font-size: 0.8rem;
      }
    }
  }
`;

function Intro({ scrollIndex }) {
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleWelcomeComplete = () => {
    setShowPortfolio(true);
  };
  return (
    <Main>
      <div className="bg">
        {/* <img src={Moon} alt="moon" className="moon" /> */}
        {/* <img src={BgLeft} alt="BgLeft" className="bgLeft" /> */}
        {/* <img src={Cloud} alt="Cloud" className="cloud" /> */}
      </div>
      <div className="filter"></div>
      <IntroArea>
        <div className="text">
          {scrollIndex === 1 ? (
            <TypingAnimation
              text={`G_JJUNNY`}
              onComplete={handleWelcomeComplete}
              delay={150}
            />
          ) : (
            <>G_JJUNNY</>
          )}
          {scrollIndex === 1 ? (
            <p className="sub animate__animated animate__fadeIn animate__delay-2s">
              Junior Front-end Developer
            </p>
          ) : (
            <div className="sub">Junior Front-end Developer</div>
          )}
        </div>
      </IntroArea>
    </Main>
  );
}

export default Intro;
