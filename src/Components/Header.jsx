import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
const Head = styled.div`
  width: 100vw;
  height: 4.5rem;
  position: fixed;
  color: #fff;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  .contents {
    display: flex;
    justify-content: space-between;

    h3 {
      transition: all 0.5s;
    }
    h3:hover {
      text-shadow: 0px 0px 5px #ffffff;
      transition: all 0.5s;
    }
  }
`;

const IconGroup = styled.div`
  display: flex;
  /* font-size: 2rem; */
  .icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
  }
  .icon:hover {
    animation: shake 0.25s;
  }
`;

function Header({ scroll }) {
  const [isVisiable, setIsVisiable] = useState(false);
  useEffect(() => {
    if (scroll) {
      setIsVisiable(true);
    } else {
      setIsVisiable(false);
    }
  }, [scroll, isVisiable]);
  return (
    <Head
      style={
        {
          // opacity: `${isVisiable ? "0.2" : "0"} `
        }
      }
    >
      <div className="contents">
        <a href="/">
          <h4 style={{ display: "inline-block", fontWeight: "700" }}>
            G_JJUNNY
          </h4>
        </a>
        <IconGroup>
          <a
            href="https://www.instagram.com/g_jjunny/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="icon" />
          </a>
          <a
            href="https://github.com/G-jjunny/G-jjunny"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="icon" />
          </a>
          <a
            href="mailto:rudwns9551@naver.com"
            target="_blank"
            rel="noreferrer"
          >
            <EmailIcon className="icon" />
          </a>
        </IconGroup>
      </div>
    </Head>
  );
}

export default Header;
