import React from "react";
import Tech from "../Image/tech-stack.png";
import { styled } from "styled-components";
import "./TechStack.scss";

const TechArea = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  color: #fff;
`;

function TechStack() {
  return (
    <TechArea>
      <div className="bg-area">
        <div className="contents">
          <h1 className="animate__animated animate__pulse animate__slow animate__infinite	infinite">
            Tech Stack
          </h1>
        </div>
      </div>
      <div className="contents">
        <div className="stack">
          <h3>Dev Tech.</h3>

          {/* <button className="btn">#React</button> */}

          <ul className="exp">
            <li>피그마를 이용한 디자인</li>
            <li>둘</li>
          </ul>
          <div className="tech-group">
            <div className="tech">#HTML5</div>
            <div className="tech">#JavaScript(ES6+)</div>
            <div className="tech">#CSS3</div>
            <div className="tech">#SCSS</div>
            <div className="tech">#Styled-components</div>
            <div className="tech">#React.js</div>
            <div className="tech">#Node.js</div>
          </div>
        </div>
        <div className="stack">
          <h3>Design & Tools</h3>
          <div className="tech-group">
            <div className="tech">#Visual Studio Code</div>
            <div className="tech">#Figma</div>
          </div>
        </div>
      </div>
    </TechArea>
  );
}

export default TechStack;
