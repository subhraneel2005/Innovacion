"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import "./Gallery.css";

const img1 = "/Gallery/01.webp";
const img2 = "/Gallery/02.webp";
const img3 = "/Gallery/03.webp";
const img4 = "/Gallery/04.webp";
const img5 = "/Gallery/05.webp";
const img6 = "/Gallery/06.webp";
const img7 = "/Gallery/07.webp";
const img8 = "/Gallery/08.webp";
const img9 = "/Gallery/09.webp";
const img10 = "/Gallery/10.webp";
const img11 = "/Gallery/11.webp";
const img12 = "/Gallery/12.webp";

function Gallery() {
  const galleryRef = useRef(null);
  const imgPreviewRef = useRef(null);
  const imgsRef = useRef([]);

  let isImgPreviewOpen = false;
  let activeImg = null;
  let activeImgParent = null;

  useEffect(() => {
    const imgPreview = imgPreviewRef.current;
    const imgs = imgsRef.current;

    imgs.forEach((img) => {
      const theImgMask = img.querySelector(".wrap");
      const theImg = img.querySelector("img");

      img.addEventListener("click", () => {
        const imgState = Flip.getState([theImgMask, theImg]);
        gsap.set(imgPreview, { autoAlpha: 1 });
        activeImg = theImgMask;
        activeImgParent = theImgMask.parentNode;
        imgPreview.appendChild(theImgMask);

        Flip.from(imgState, {
          duration: 1,
          ease: "power3.inOut",
          scale: true,
          onStart: () => {
            imgPreview.classList.add("imgPreview--active");
          },
          onComplete: () => {
            isImgPreviewOpen = true;
          }
        });
      });
    });

    const handleImgPreviewClick = (e) => {
      if (!activeImg) return;

      const activeImgState = Flip.getState([activeImg, activeImg.querySelector("img")]);

      activeImgParent.appendChild(activeImg);

      Flip.from(activeImgState, {
        duration: 1,
        ease: "power3.inOut",
        absolute: true,
        scale: true,
        zIndex: 2000,
        nested: true,
        onStart: () => {
          imgPreview.classList.remove("imgPreview--active");
        },
        onComplete: () => {
          isImgPreviewOpen = false;
          gsap.set(imgPreview, { autoAlpha: 0 });
        }
      });
    };

    imgPreview.addEventListener("click", handleImgPreviewClick);

    return () => {
      imgPreview.removeEventListener("click", handleImgPreviewClick);
    };
  }, []);


  return (
    <div className='h-[90vh] relative w-full overflow-y-auto bg-[#0f0f0f]' ref={galleryRef}>
      <div className='header'>
        <div className='imgPreview' ref={imgPreviewRef}></div>
        <div className='imgContainer noImg'></div>

        <div className='imgContainer'>
          <div className='wrap' ref={(el) => imgsRef.current.push(el)}>
            <img src={img1} alt="1" />
          </div>
        </div>

        <div className='imgContainer noImg'></div>
        <div className='imgContainer noImg'></div>
        <div className='imgContainer noImg'></div>

        <div className='imgContainer'>
          <div className='wrap' ref={(el) => imgsRef.current.push(el)}>
            <img src={img2} alt="2" />
          </div>
        </div>

        <div className='imgContainer noImg'></div>

        <div className='imgContainer'>
          <div className='wrap' ref={(el) => imgsRef.current.push(el)}>
            <img src={img3} alt="3" />
          </div>
        </div>

        <div className='imgContainer'>
          <div className='wrap' ref={(el) => imgsRef.current.push(el)}>
            <img src={img4} alt="4" />
          </div>
        </div>

        <div className='imgContainer noImg'></div>
        <div className='imgContainer noImg'></div>

        <div className='imgContainer'>
          <div className='wrap' ref={(el) => imgsRef.current.push(el)}>
            <img src={img5} alt="5" />
          </div>
        </div>

        <div className='imgContainer'>
          <div className='wrap' ref={(el) => imgsRef.current.push(el)}>
            <img src={img6} alt="6" />
          </div>
        </div>

        <div className='imgContainer noImg'></div>

        <div className='imgContainer'>
          <div className='wrap' ref={(el) => imgsRef.current.push(el)}>
            <img src={img7} alt="7" />
          </div>
        </div>

        <div className='imgContainer noImg'></div>
        <div className='imgContainer noImg'></div>
        <div className='imgContainer noImg'></div>

        <div className='imgContainer'>
          <div className='wrap' ref={(el) => imgsRef.current.push(el)}>
            <img src={img8} alt="8" />
          </div>
        </div>

        <div className='imgContainer noImg'></div>
        <div className='imgContainer noImg'></div>
        <div className='imgContainer noImg'></div>
        <div className='imgContainer noImg'></div>

        <div className='imgContainer'>
          <div className='wrap' ref={(el) => imgsRef.current.push(el)}>
            <img src={img9} alt="9" />
          </div>
        </div>

        <div className='imgContainer'>
          <div className='wrap' ref={(el) => imgsRef.current.push(el)}>
            <img src={img10} alt="10" />
          </div>
        </div>

        <div className='imgContainer noImg'></div>
        <div className='imgContainer noImg'></div>

        <div className='imgContainer'>
          <div className='wrap' ref={(el) => imgsRef.current.push(el)}>
            <img src={img11} alt="11" />
          </div>
        </div>

        <div className='imgContainer noImg'></div>

        <div className='imgContainer'>
          <div className='wrap' ref={(el) => imgsRef.current.push(el)}>
            <img src={img12} alt="12" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
