import { useEffect } from "react";

const DIVIDER_HEIGHT = 5;

const useWheelHandler = (outerDivRef, setScrollIndex) => {
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
      // console.log(scrollTop, pageHeight);
      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          // setTimeout(() => {
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          // }, 500);
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (
          scrollTop >= pageHeight * 2 &&
          scrollTop < pageHeight * 2 + 405
        ) {
          // 현재 3(1)페이지
          // 3페이지는 100vh가 아님
          console.log("현재 3(1)페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2 + 405,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (
          scrollTop >= pageHeight * 2 + 405 &&
          scrollTop < pageHeight * 3 + 405
        ) {
          // 현재 3(2)페이지
          // 3페이지는 100vh가 아님
          console.log("현재 3(2)페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3 + 405,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        }
        // else {
        //   // 현재 4페이지
        //   console.log("현재 4페이지, down");
        //   outerDivRef.current.scrollTo({
        //     top: pageHeight * 4 + DIVIDER_HEIGHT * 4 + 400,
        //     left: 0,
        //     behavior: "smooth",
        //   });
        //   setScrollIndex(5);
        // }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (
          scrollTop >= pageHeight * 2 &&
          scrollTop < pageHeight * 2 + 405
        ) {
          //현재 3(1)페이지
          console.log("현재 3(1)페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (
          scrollTop >= pageHeight * 2 + 405 &&
          scrollTop < pageHeight * 3 + 405
        ) {
          //현재 3(2)페이지
          console.log("현재 3(2)페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (
          scrollTop >= pageHeight * 3 + 405 &&
          scrollTop < pageHeight * 4
        ) {
          //현재 4페이지
          console.log("현재 4페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2 + 405,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else {
          // 현재 5페이지
          console.log("현재 5페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3 + 405,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        outerDivRef.current.addEventListener("wheel", wheelHandler);
      } else {
        outerDivRef.current.removeEventListener("wheel", wheelHandler);
      }
    };

    handleResize(); // 컴포넌트 마운트시 초기 체크

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      outerDivRef.current.removeEventListener("wheel", wheelHandler);
    };

    // const outerDivRefCurrent = outerDivRef.current;
    // outerDivRefCurrent.addEventListener("wheel", wheelHandler);

    // return () => {
    //   outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    // };
  }, [outerDivRef, setScrollIndex]);
};

export default useWheelHandler;
