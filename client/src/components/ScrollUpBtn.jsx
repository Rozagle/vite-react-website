// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const ScrollUpBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <FaArrowUp className="top-btn--icon" />
        </div>
      )}
    </Wrapper>
  );
};

const ScrollUpBtnAnimation = keyframes`
  0% {
    transform: translateY(-0.1rem);
  }
  100% {
    transform: translateY(0.4rem);
  }
`;

const MediaQueries = {
  maxsmallScreen: `@media (min-width: 300px) and (max-width: 480px)`,
  smallScreen: `@media (max-width: 620px)`,
  mediumScreen: `@media (min-width: 768px) and (max-width: 1024px)`,
  largeScreen: `@media (min-width: 1025px)`,
};

const Wrapper = styled.section`
  position: fixed;
  bottom: 1.4rem;
  right: 1rem;
  z-index: 999;

  .top-btn {
    width: 0.4rem;
    height: 0.4rem;
    background-color: #0066ff;
    color: #fff;
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.5rem;
    animation: ${ScrollUpBtnAnimation} 1.2s linear infinite alternate-reverse;

    &:hover {
      background-color: #6391FF;
    }
  }

  ${MediaQueries.maxsmallScreen} {
    .top-btn {
      width: 2rem; 
      height: 2rem; 
    }
  }

  ${MediaQueries.smallScreen} {
    .top-btn {
      width: 2.5rem; 
      height: 2.5rem; 
    }
  }

  ${MediaQueries.mediumScreen} {
    .top-btn {
      width: 3.5rem; 
      height: 3.5rem; 
    }
  }

  ${MediaQueries.largeScreen} {
    .top-btn {
      width: 4rem; 
      height: 4rem; 
    }
  }
`;

export default ScrollUpBtn