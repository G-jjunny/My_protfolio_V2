import React from "react";
import { styled } from "styled-components";
import Jun from "../Image/jjunnyjpg.jpg";
import Profile from "../Image/profile.jpg";
const MainArea = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  .contents {
    display: flex;
    height: fit-content;
    align-items: end;
    img {
      width: 300px;
      height: 400px;
      border-radius: 5px;
    }
    .text-group {
      color: #fff;
      /* display: inline-block; */
      padding-left: 4rem;
      h1 {
        display: inline-block;
      }
      h4 {
        margin-top: 2rem;
        color: var(--bright);
        font-weight: 400;
        line-height: 30px;
        span {
          color: var(--main-green);
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .contents {
      /* flex-direction: column; */
      /* align-items: start; */
      margin: 0 auto 80px;
      position: relative;
      img {
        width: 200px;
        height: 266px;
      }
      .text-group {
        padding-left: 2rem;
        .bottom {
          position: absolute;
          width: 100%;
          left: 0;
        }
      }
    }
  }
`;

function Main() {
  return (
    <>
      <MainArea>
        <div className="contents">
          <img src={Profile} alt="profile" />
          <div className="text-group">
            <h1
              style={{ fontWeight: 800 }}
              className="animate__animated animate__pulse animate__slow animate__infinite	infinite"
            >
              Hello World!
            </h1>
            <h4>
              안녕하세요 주니어 프론트엔드 개발자 정경준입니다.
              <br />
              저의 목표는 항상 새로운 시도를 두려워하지 않는 프론트엔드 개발자,
              <br />
              사람들의 기억에 남을 수 있는 웹을 만드는 것이 목표입니다.
              <br />
              <span>React</span>를 주로 활용하여 웹 애플리케이션을 개발하며
              <br />
              협업과 유지보수에 좋은 코드를 짜기 위해 꾸준히 학습하고 있습니다.
            </h4>
            <h4 className="bottom">
              웹 개발은 혼자 하는 일이 아닌 만큼 사람들 간의{" "}
              <span>약속, 그리고 소통</span>이 중요하다고 생각합니다.
              <br />
              유연한 소통을 할 수 있도록 항상 경청하고 열린 자세로 임하며 성장해
              나가는 <span>flexible</span>한 사람이 되겠습니다.
            </h4>
          </div>
        </div>
      </MainArea>
    </>
  );
}

export default Main;
