import React, { useRef, useEffect } from 'react';
import { gsap, Power2, Power4, TimelineMax } from 'gsap';
import './MenuComponent.scss';  // Assuming you're using a separate CSS file

const MenuComponent = () => {
  // Refs for DOM elements
  const openTriggerRef = useRef(null);
  const closeTriggerRef = useRef(null);
  const logoRef = useRef(null);
  const menuTopRef = useRef(null);
  const menuMiddleRef = useRef(null);
  const menuBottomRef = useRef(null);
  const menuRef = useRef(null);
  const openTriggerTopRef = useRef(null);
  const openTriggerMiddleRef = useRef(null);
  const openTriggerBottomRef = useRef(null);
  const closeTriggerLeftRef = useRef(null);
  const closeTriggerRightRef = useRef(null);

  useEffect(() => {
    const tlOpen = new TimelineMax({ paused: true });
    const tlClose = new TimelineMax({ paused: true });

    // OPEN TIMELINE
    tlOpen.add("preOpen")
      .to(logoRef.current, 0.4, {
        scale: 0.8,
        opacity: 0,
        ease: Power2.easeOut
      }, "preOpen")
      .to(openTriggerTopRef.current, 0.4, {
        x: "+80px", y: "-80px", delay: 0.1, ease: Power4.easeIn, onComplete: function () {
          closeTriggerRef.current.style.zIndex = '25';
        }
      }, "preOpen")
      .to(openTriggerMiddleRef.current, 0.4, {
        x: "+=80px", y: "-=80px", ease: Power4.easeIn,
        onComplete: function () {
          openTriggerRef.current.style.visibility = 'hidden';
        }
      }, "preOpen")
      .to(openTriggerBottomRef.current, 0.4, {
        x: "+=80px", y: "-=80px", delay: 0.2, ease: Power4.easeIn
      }, "preOpen")
      .add("open", "-=0.4")
      .to(menuTopRef.current, 0.8, {
        y: "13%",
        ease: Power4.easeInOut
      }, "open")
      .to(menuMiddleRef.current, 0.8, {
        scaleY: 1,
        ease: Power4.easeInOut
      }, "open")
      .to(menuBottomRef.current, 0.8, {
        y: "-114%",
        ease: Power4.easeInOut
      }, "open")
      .fromTo(menuRef.current, 0.6, {
        y: 30, opacity: 0, visibility: 'hidden'
      }, {
        y: 0, opacity: 1, visibility: 'visible', ease: Power4.easeOut
      }, "-=0.2")
      .add("preClose", "-=0.8")
      .to(closeTriggerLeftRef.current, 0.8, {
        x: "-=100px", y: "+=100px", ease: Power4.easeOut
      }, "preClose")
      .to(closeTriggerRightRef.current, 0.8, {
        x: "+=100px", y: "+=100px", delay: 0.2, ease: Power4.easeOut
      }, "preClose");

    // CLOSE TIMELINE
    tlClose.add("close")
      .to(menuTopRef.current, 0.2, {
        backgroundColor: "#6295ca", ease: Power4.easeInOut, onComplete: function () {
          logoRef.current.style.zIndex = '26';
          closeTriggerRef.current.style.zIndex = '5';
          openTriggerRef.current.style.visibility = 'visible';
        }
      }, "close")
      .to(menuMiddleRef.current, 0.2, {
        backgroundColor: "#6295ca", ease: Power4.easeInOut
      }, "close")
      .to(menuBottomRef.current, 0.2, {
        backgroundColor: "#6295ca", ease: Power4.easeInOut
      }, "close")
      .to(menuRef.current, 0.6, {
        y: 20, opacity: 0, ease: Power4.easeOut, onComplete: function () {
          menuRef.current.style.visibility = 'hidden';
        }
      }, "close")
      .to(logoRef.current, 0.8, {
        scale: 1, opacity: 1, ease: Power4.easeInOut
      }, "close", "+=0.2")
      .to(menuTopRef.current, 0.8, {
        y: "-113%",
        ease: Power4.easeInOut
      }, "close", "+=0.2")
      .to(menuMiddleRef.current, 0.8, {
        scaleY: 0,
        ease: Power4.easeInOut
      }, "close", "+=0.2")
      .to(menuBottomRef.current, 0.8, {
        y: "23%",
        ease: Power4.easeInOut,
        onComplete: function () {
          menuTopRef.current.style.backgroundColor = '#ffffff';
          menuMiddleRef.current.style.backgroundColor = '#ffffff';
          menuBottomRef.current.style.backgroundColor = '#ffffff';
        }
      }, "close", "+=0.2")
      .to(closeTriggerLeftRef.current, 0.2, {
        x: "+=100px", y: "-=100px", ease: Power4.easeIn
      }, "close")
      .to(closeTriggerRightRef.current, 0.2, {
        x: "-=100px", y: "-=100px", delay: 0.1, ease: Power4.easeIn
      }, "close")
      .to(openTriggerTopRef.current, 1, {
        x: "-=80px", y: "+=80px", delay: 0.2, ease: Power4.easeOut
      }, "close")
      .to(openTriggerMiddleRef.current, 1, {
        x: "-=80px", y: "+=80px", ease: Power4.easeOut
      }, "close")
      .to(openTriggerBottomRef.current, 1, {
        x: "-=80px", y: "+=80px", delay: 0.1, ease: Power4.easeOut
      }, "close");

    // Event listeners
    const handleOpenClick = () => {
      if (tlOpen.progress() < 1) {
        tlOpen.play();
      } else {
        tlOpen.restart();
      }
    };

    const handleCloseClick = () => {
      if (tlClose.progress() < 1) {
        tlClose.play();
      } else {
        tlClose.restart();
      }
    };

    openTriggerRef.current.addEventListener('click', handleOpenClick);
    closeTriggerRef.current.addEventListener('click', handleCloseClick);

    return () => {
      openTriggerRef.current.removeEventListener('click', handleOpenClick);
      closeTriggerRef.current.removeEventListener('click', handleCloseClick);
    };
  }, []);

  return (
    <div className="menu-component hidden md:flex">
      <div className="menu-trigger" ref={openTriggerRef}>
        <div className="menu-trigger-bar top" ref={openTriggerTopRef}></div>
        <div className="menu-trigger-bar middle" ref={openTriggerMiddleRef}></div>
        <div className="menu-trigger-bar bottom" ref={openTriggerBottomRef}></div>
      </div>

      <div className="close-trigger" ref={closeTriggerRef}>
        <div className="close-trigger-bar left" ref={closeTriggerLeftRef}></div>
        <div className="close-trigger-bar right" ref={closeTriggerRightRef}></div>
      </div>

      <div className="logo" ref={logoRef}>
        Logo
      </div>

      <div className="menu-container">
        <div className="menu-bg top" ref={menuTopRef}></div>
        <div className="menu-bg middle" ref={menuMiddleRef}></div>
        <div className="menu-bg bottom" ref={menuBottomRef}></div>
        <div className="menu" ref={menuRef}>
          Menu Content
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
