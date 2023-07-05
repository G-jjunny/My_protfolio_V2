import React from "react";
import { styled } from "styled-components";
import Profile2 from "../Image/jjunnyjpg.jpg";
import Profile3 from "../Image/chris.jpg";
import Profile4 from "../Image/profile3.jpg";

const OutTroArea = styled.div`
  width: 100vw;
  color: var(--main-white);
  .contents {
    height: 100vh;
    display: flex;
    .group {
      width: 100%;
      display: flex;
      height: min-content;
      margin: auto 0;
      align-items: end;
      img {
        width: 400px;
        border-radius: 5px;
      }
      .text {
        margin: 0 0 50px 20px;
        h4 {
          margin-top: 20px;
          color: var(--secondary);
          line-height: 30px;
        }
      }
      .emph {
        color: var(--main-green);
      }
    }
  }
`;

function OutTro() {
  return (
    <OutTroArea>
      <div className="contents">
        <div className="group">
          <img src={Profile4} alt="Profile2" />
          <div className="text">
            <h2 style={{ fontWeight: "700" }}>
              Thanks for watching my Portfolio
            </h2>
            <h4>
              지금까지의 학습한 기술을 바탕으로 저에게 저의 능력에 보완을 꾸준히
              해 나가며.
              <br />
              프로젝트의 성과를 극대화함으로써 사용자에게 더 나은 서비스를
              제공하고
              <br />
              오늘보더 내일 더 나은 프론트엔드 개발자 정경준으로써 책임감을
              가지고 성실히 노력하겠습니다.
            </h4>
            <h4>
              지금까지 <span className="emph">정경준</span>이었습니다.
            </h4>
          </div>
        </div>
      </div>
    </OutTroArea>
  );
}

export default OutTro;
