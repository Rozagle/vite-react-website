/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  team1, team2, team3, team4, team5, team6,
  team7, team8, team9, team10, team11, team12, team13
} from '../assets/Teams-photo/Teams.js';
import './Teams.css';

function Te() {
  const { t, i18n } = useTranslation();
  const [currentLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'tr');

  const TeamsInfo = [
    { 'Name': 'Naci Özkan', 'title': 'title1', 'titlesub': 'title1sub', 'img': team1 },
    { 'Name': 'Yeşim Sonbudak', 'title': 'title2', 'img': team2 },
    { 'Name': 'Cuneyt Gülener', 'title': 'title3', 'img': team3 },
    { 'Name': 'Emin Uçar', 'title': 'title4', 'img': team4 },
    { 'Name': 'H. Meral Akman', 'title': 'title5', 'img': team5 },
    { 'Name': 'Gürkan Güleç', 'title': 'title6', 'img': team6 },
    { 'Name': 'Çiğdem Büyükergen', 'title': 'title7', 'img': team7 },
    { 'Name': 'Zafer Şekerci', 'title': 'title8', 'img': team8 },
    { 'Name': 'Önder İlze', 'title': 'title9', 'img': team9 },
    { 'Name': 'Dilek Şekerci', 'title': 'title10', 'img': team10 },
    { 'Name': 'Roza Allafi', 'title': 'title11', 'img': team11 },
    { 'Name': 'Arınç aydın', 'title': 'title12', 'img': team12 },
    { 'Name': 'Çağan Oduncuoğlu', 'title': 'title13', 'img': team13 },
  ];

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);

  let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const carousel = carouselRef.current;
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = wrapper.querySelectorAll(".arrow-icon");
    const carouselChildren = [...carousel.children];

    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    carouselChildren.slice(-cardPerView).reverse().forEach(card => {
      carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildren.slice(0, cardPerView).forEach(card => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    arrowBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
      });
    });

    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    const infiniteScroll = () => {
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
      } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }
      clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) autoPlay();
    };

    const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return;
      timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 1500);
    };

    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);

    return () => {
      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("mousemove", dragging);
      document.removeEventListener("mouseup", dragStop);
      carousel.removeEventListener("scroll", infiniteScroll);
      wrapper.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
      wrapper.removeEventListener("mouseleave", autoPlay);
    };
  }, []);

  return (
    <>
      <div id='Teams' className='flex space-y-2 flex-col text-center mb-14'>
        <div className='flex space-y-2 flex-col text-center'>
          <h1 className="md:text-4xl sm:text-3xl xxs:text-4xl text-2xl font-bold text-center mt-8 mb-4 xxs:mb-0 capitalize">
            {t('TeamPage.heading')}
          </h1>
          <span className='text-2xl md:text-3xl xxs:text-md'>
            {t('TeamPage.subheading1')}
          </span>
          <span className='text-2xl md:text-3xl xxs:text-md'>
            {t('TeamPage.subheading2')}
          </span>
        </div>
      </div>

      <div className="slider-container min-h-[500px]">
        <div className="wrapper" ref={wrapperRef}>
          <FiArrowLeft id="left" className="arrow-icon" />
          <ul className="carousel" ref={carouselRef}>
            {TeamsInfo.map((team, index) => (
              <li className="card" key={index}>
                <div className="img">
                  <img src={team.img} alt="img" draggable="false" />
                </div>
                <h2>{team.Name}</h2>
                <span>{t(`TeamPage.${team.title}`)}</span>
                {index === 0 && team.titlesub && (
                  <span className='subtitle'>
                    {t(`TeamPage.${team.titlesub}`)}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <FiArrowRight id="right" className="arrow-icon" />
        </div>
      </div>
    </>
  );
}

export default Te;
