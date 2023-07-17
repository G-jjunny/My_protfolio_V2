import { styled } from "styled-components";

const NavDots = styled.div`
  position: fixed;
  top: calc(50% - 50px);
  left: 50px;
  z-index: 10;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const Dot = ({ num, scrollIndex }) => {
  return (
    <div
      style={{
        width: 8,
        height: 8,
        border: "1px solid var(--main-green)",
        borderRadius: 999,
        backgroundColor:
          scrollIndex === num ? "var(--main-green)" : "transparent",
        boxShadow: scrollIndex === num ? "0 0 8px var(--main-green)" : "none",
        transitionDuration: 1000,
        // transition: "background-color 0.5s",
        transition: "0.5s",
      }}
    ></div>
  );
};

const Dots = ({ scrollIndex }) => {
  return (
    <NavDots>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: 20,
          height: 100,
        }}
      >
        <Dot num={1} scrollIndex={scrollIndex}></Dot>
        <Dot num={2} scrollIndex={scrollIndex}></Dot>
        <Dot num={3} scrollIndex={scrollIndex}></Dot>
        <Dot num={4} scrollIndex={scrollIndex}></Dot>
        <Dot num={5} scrollIndex={scrollIndex}></Dot>
      </div>
    </NavDots>
  );
};

export default Dots;
