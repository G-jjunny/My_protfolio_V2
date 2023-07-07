import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import TestImage from "../Components/TestImage";
import TestCard from "../Components/TestCard";

const TestArea = styled.div`
  width: 100%;
  height: 100vh;
  color: #fff;
  overflow: hidden;
  .contents {
    overflow: hidden;
    height: 100%;
    display: flex;
    position: relative;
    .card {
      margin: auto;
    }
  }
`;

function Test() {
  const [isView, setIsView] = useState(false);

  useEffect(() => {
    console.log(isView);
  }, [isView]);

  const handleClick = () => {
    setIsView(!isView);
  };

  return (
    <TestArea isView={isView}>
      <div className="contents">
        <TestCard handleClick={handleClick} isView={isView} />
      </div>
    </TestArea>
  );
}

export default Test;
