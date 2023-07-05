import React from "react";
import { styled } from "styled-components";
import Jun from "../Image/jjunnyjpg.jpg";

const Profile = styled.div`
  .phce {
    perspective: 1100px;
    position: relative;
  }
  .phce .content {
    position: relative;
    overflow: hidden;
    transform-style: preserve-3d;
  }
  .phce .content::before,
  .phce .content::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    transform-style: preserve-3d;
  }
  .phce .content::before {
    background-image: url(Jun);
    background-size: cover;
  }
  .phce .content::after {
    background: var(--main-color, none);
  }
  .phce:hover > .content::before {
    transform: scale(1.33) translateX(calc(-12.5%) * var(--posX, 0))
      translateY(calc(-12.5% * var(--posY, 0)));
  }
  .phce:hover > .content {
    transform: rotateX(calc(-12.5deg * var(--posY, 0)))
      rotateY(calc(-22.5deg * var(--posX, 0)));
  }
  .phce:not(:hover) > .content,
  .phce:not(:hover) > .content::before {
    transition: transform var(--transition-duration, 500ms)
      var(--transition-timing-function, linear);
  }
`;

function ProfileCard() {
  return (
    <Profile>
      <div className="phce card card-1">
        <div className="content">test</div>
      </div>
    </Profile>
  );
}

export default ProfileCard;
