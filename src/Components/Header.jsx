import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Head = styled.div`
  width: 100vw;
  height: 4.5rem;
  position: fixed;
  color: #fff;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  background-color: inherit;
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
  .box {
    width: min-content;
    position: relative;
    .icon {
      width: 1.5rem;
      height: 1.5rem;
      margin-left: 1rem;
    }
    p {
      position: absolute;
      text-align: center;
      opacity: 0;
      transition: all.5s;
      bottom: -20px;
      /* bottom: 0; */
      color: var(--secondary);
      z-index: 10;
    }
  }
  .box:hover .icon {
    animation: shake 0.25s;
  }
  .box:hover p {
    opacity: 1;
    transition: all.5s;
    color: var(--bright);
  }
`;

function Header({ scrollIndex }) {
  return (
    <Head>
      <div className="contents">
        <a href="/">
          {scrollIndex === 1 ? (
            <h4
              style={{
                display: "inline-block",
                fontWeight: "700",
              }}
            >
              G_JJUNNY
            </h4>
          ) : (
            <h4
              style={{
                display: "inline-block",
                textShadow: "0 0 5px #fff ",
                fontWeight: "700",
              }}
            >
              G_JJUNNY
            </h4>
          )}
        </a>
        <IconGroup>
          <a
            // 아래 써핏링크는 Project component완성되면 변경 예정
            // href="https://my.surfit.io/w/577039384"
            href="https://venerable-stardust-67904f.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="box">
              <AccountCircleIcon className="icon" />
              <p>Project</p>
            </div>
          </a>
          <a
            href="https://github.com/G-jjunny/G-jjunny"
            target="_blank"
            rel="noreferrer"
          >
            <div className="box">
              <GitHubIcon className="icon" />
              <p>Github</p>
            </div>
          </a>

          <a
            href="mailto:rudwns9551@naver.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="box">
              <EmailIcon className="icon" />
              <p style={{}}>Email</p>
            </div>
          </a>
          <a
            href="https://www.instagram.com/g_jjunny/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="box">
              <InstagramIcon className="icon" />
              <p style={{ bottom: "-20px" }}>Instagram</p>
            </div>
          </a>
        </IconGroup>
      </div>
    </Head>
  );
}

export default Header;
