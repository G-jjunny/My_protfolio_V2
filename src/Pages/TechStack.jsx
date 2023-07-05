import React from "react";
import Tech from "../Image/tech-stack.png";
import { styled } from "styled-components";
import "./TechStack.scss";

const TechArea = styled.div`
  padding-bottom: 70px;
  width: 100vw;
  height: fit-content;
  background-color: var(--main-color);
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
            <li>
              React를 사용하여 사용자 인터페이스를 구축하고, 컴포넌트 기반
              아키텍처를 통해 재사용성과 유지보수성을 강조하기 위하여 지속적인
              노력을 하고있습니다.
            </li>
            <li>
              또한 React의 생태계를 풍부하게 활용하여 Material-UI, Ant Design
              등의 UI 라이브러리를 사용한 경험이 있습니다.
            </li>
            <li>
              CSS, SCSS, Styled-Components 등을 통해 디자인 결과물과 흡사하게
              웹에 구현에 어려움이 없으며 반응형 웹 개발이 가능합니다.
            </li>
          </ul>
          <div className="tech-group">
            <div className="tech">#HTML5</div>
            <div className="tech">#JavaScript(ES6+)</div>
            <div className="tech">#CSS3</div>
            <div className="tech">#SCSS</div>
            <div className="tech">#Styled-components</div>
            <div className="tech">#React.js</div>
            <div className="tech">#Node.js</div>
            <div className="tech">#Redux</div>
          </div>
        </div>
        <div className="stack">
          <h3>Design & Tools.</h3>
          <ul className="exp">
            <li>
              프로그래밍 능력에 더해 UI/UX 설계를 위해 Figma를 사용할 수
              있습니다.
            </li>
            <li>
              코드 에디터로는 Visual Studio Code를 활용하여 작업을 하고있으며,
            </li>
            <li>
              협업 도구로는 Git을 기반으로한 GitHub플랫폼을 사용하여 프로젝트
              관리를 하고있습니다.
            </li>
          </ul>
          <div className="tech-group">
            <div className="tech">#Figma</div>
            <div className="tech">#Visual Studio Code</div>
            <div className="tech">#GitHub</div>
          </div>
        </div>
        <div className="stack">
          <h3>Learning.</h3>
          <ul className="exp">
            <li>
              추가적으로 정적 타입을 지원하여 코드의 안정성과 가독성을
              향상시키기 위하여 TypeScript를 학습중입니다.
            </li>
            <li>
              또한 Axios와 같은 HTTP 클라이언트를 통해 서버와의 통신을 처리를
              하는 능력을 기르기 위하여 REST API 통신을 학습하는 중에 있습니다.
            </li>
          </ul>
          <div className="tech-group">
            <div className="tech">#TypeScript</div>
            <div className="tech">#Rest API</div>
          </div>
        </div>
      </div>
    </TechArea>
  );
}

export default TechStack;
