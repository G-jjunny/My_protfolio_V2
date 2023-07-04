import React from "react";
import { styled } from "styled-components";

const ImgBox = styled.div`
  margin: 10px;
  width: 600px;
  height: 600px;
  box-sizing: border-box;
  border: 2px solid #000;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  .box {
    width: 50%;
    height: 50%;
    box-shadow: 0 0 0 1px #000;
    position: relative;
  }
  .box::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 0 1px #000 inset;
  }
  .absol {
    position: absolute;
  }
  .center {
    top: 25%;
    left: 25%;
  }
`;

function TestImage() {
  return (
    <ImgBox>
      {/* 1번 */}
      <div className="box" style={{ backgroundColor: "magenta" }}>
        <div className="box absol" style={{ backgroundColor: "white" }}></div>
      </div>
      {/* 2번 */}
      <div className="box" style={{ backgroundColor: "black" }}>
        <div
          className="box absol center"
          style={{
            backgroundColor: "blue",
            zIndex: "2",
          }}
        ></div>
        <div
          className="box absol"
          style={{ backgroundColor: "aqua", bottom: 0, right: 0 }}
        ></div>
      </div>
      {/* 3번 */}
      <div className="box" style={{ backgroundColor: "black" }}>
        <div
          className="box absol center"
          style={{ backgroundColor: "white", zIndex: "2" }}
        ></div>
      </div>
      {/* 4번 */}
      <div className="box" style={{ backgroundColor: "yellow" }}></div>
      {/* 가운데 초록 */}
      <div className="box absol center" style={{ backgroundColor: "lime" }}>
        <div
          className="box absol"
          style={{ backgroundColor: "red", top: "25%" }}
        ></div>
        <div
          className="box absol"
          style={{ backgroundColor: "white", bottom: 0, left: "25%" }}
        ></div>
      </div>
    </ImgBox>
  );
}

export default TestImage;
