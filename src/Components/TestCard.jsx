import React, { useEffect } from "react";
import { styled } from "styled-components";
import TestImage from "./TestImage";

const Card = styled.div`
  width: 600px;
  height: 600px;
  margin: auto;
  .front {
    position: absolute;
    width: 600px;
    height: 600px;
    display: flex;
    flex-direction: column;
    backface-visibility: hidden;
    transition: 1.5s;
    transform: ${(props) =>
      props.isView ? "rotateY(-180deg)" : "rotateY(0deg)"};
  }
  .text {
    text-align: center;
    margin: auto 0;
    h2 {
      transition: all.5s;
    }
  }

  h2:hover {
    scale: 1.2;
    transition: all.5s;
  }
  .back {
    transition: 1.5s;
    backface-visibility: hidden;
    transform: ${(props) =>
      props.isView ? "rotateY(0deg)" : "rotateY(-180deg)"};
  }
`;

function TestCard({ handleClick, isView }) {
  return (
    <Card isView={isView}>
      <div className="front">
        <div className="text">
          <h2 style={{ textShadow: "0px 0px 10px #fff" }} onClick={handleClick}>
            Click Here!
          </h2>
          <h4
            style={{
              marginTop: "2rem",
              fontWeight: "300",
              color: "var(--secondary)",
            }}
          >
            주어진 조건에 맞게 구성한 이미지입니다.
          </h4>
        </div>
      </div>
      <div className="back" onClick={handleClick}>
        <TestImage isView={isView} />
      </div>
    </Card>
  );
}

export default TestCard;
