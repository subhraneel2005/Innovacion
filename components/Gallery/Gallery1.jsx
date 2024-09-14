"use client"
import React, { useEffect, useRef, useState } from 'react'
import StarryBackground from '../StarryBackground/StarryBackground'
import "./Gallery1.css";

const images = [
    "/Gallery/01.webp",
    "/Gallery/02.webp",
    "/Gallery/03.webp",
    "/Gallery/04.webp",
    "/Gallery/05.webp",
    "/Gallery/06.webp",
    "/Gallery/07.webp",
    "/Gallery/08.webp",
    "/Gallery/09.webp",
    "/Gallery/10.webp",
    "/Gallery/11.webp",
    "/Gallery/12.webp"
];

const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1;
const clamp = (val, min, max) => Math.max(min, Math.min(val, max));

const Gallery1 = () => {
    const sliderRef = useRef(null);
    const wrapperRef = useRef(null);
    const [isClient, setIsClient] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        if (sliderRef.current) {
            observer.observe(sliderRef.current);
        }

        return () => {
            if (sliderRef.current) {
                observer.unobserve(sliderRef.current);
            }
        };
    }, [isClient]);

    useEffect(() => {
        if (!isClient || !isVisible) return;

        class DragScroll {
            constructor(obj) {
                this.el = obj.el;
                this.wrap = obj.wrap;
                this.items = obj.items;
                this.init();
            }

            init() {
                this.progress = 0;
                this.speed = 0;
                this.oldX = 0;
                this.x = 0;
                this.playrate = 0;

                this.bindings();
                this.events();
                this.calculate();
                this.raf();
            }

            bindings() {
                [
                    "events",
                    "calculate",
                    "raf",
                    "handleWheel",
                    "move",
                    "handleTouchStart",
                    "handleTouchMove",
                    "handleTouchEnd"
                ].forEach((method) => {
                    this[method] = this[method].bind(this);
                });
            }

            calculate() {
                this.progress = 0;
                this.wrapWidth = this.items[0].clientWidth * this.items.length;
                this.wrap.style.width = `${this.wrapWidth}px`;
                this.maxScroll = this.wrapWidth - this.el.clientWidth;
            }

            handleWheel(e) {
                this.progress += e.deltaY;
                this.move();
            }

            handleTouchStart(e) {
                e.preventDefault();
                this.dragging = true;
                this.startX = e.clientX || e.touches[0].clientX;
            }

            handleTouchMove(e) {
                if (!this.dragging) return false;
                const x = e.clientX || e.touches[0].clientX;
                this.progress += (this.startX - x) * 2.5;
                this.startX = x;
                this.move();
            }

            handleTouchEnd() {
                this.dragging = false;
            }

            move() {
                this.progress = clamp(this.progress, 0, this.maxScroll);
            }

            events() {
                window.addEventListener("resize", this.calculate);
                window.addEventListener("wheel", this.handleWheel);

                this.el.addEventListener("touchstart", this.handleTouchStart);
                window.addEventListener("touchmove", this.handleTouchMove);
                window.addEventListener("touchend", this.handleTouchEnd);

                this.el.addEventListener("mousedown", this.handleTouchStart);
                this.el.addEventListener("mousemove", this.handleTouchMove);
                this.el.addEventListener("mouseup", this.handleTouchEnd);
                document.body.addEventListener("mouseleave", this.handleTouchEnd);
            }

            raf() {
                this.x = lerp(this.x, this.progress, 0.1);
                this.playrate = this.x / this.maxScroll;

                this.wrap.style.transform = `translatex(${-this.x}px)`;

                this.speed = Math.min(100, this.oldX - this.x);
                this.oldX = this.x;

                this.scale = lerp(this.scale, this.speed, 0.1);
                this.items.forEach((item) => {
                    item.style.transform = `scale(${1 - Math.abs(this.speed) * 0.005})`;
                    item.querySelector("img").style.transform = `scaleX(${1 + Math.abs(this.speed) * 0.004})`;
                });
            }
        }

        const scroll = new DragScroll({
            el: sliderRef.current,
            wrap: wrapperRef.current,
            items: sliderRef.current.querySelectorAll('.slider-item'),
        });

        const animateScroll = () => {
            requestAnimationFrame(animateScroll);
            scroll.raf();
        }

        animateScroll();

        // Cleanup function
        return () => {
            window.removeEventListener("resize", scroll.calculate);
            window.removeEventListener("wheel", scroll.handleWheel);
            sliderRef.current.removeEventListener("touchstart", scroll.handleTouchStart);
            window.removeEventListener("touchmove", scroll.handleTouchMove);
            window.removeEventListener("touchend", scroll.handleTouchEnd);
            sliderRef.current.removeEventListener("mousedown", scroll.handleTouchStart);
            sliderRef.current.removeEventListener("mousemove", scroll.handleTouchMove);
            sliderRef.current.removeEventListener("mouseup", scroll.handleTouchEnd);
            document.body.removeEventListener("mouseleave", scroll.handleTouchEnd);
        };
    }, [isClient, isVisible]);

    if (!isClient) {
        return null; // or a loading indicator
    }

    return (
        <div id='gallery' className='w-full h-screen overflow-hidden flex justify-center items-center bg-[#000] relative -top-[80px] '>
            <div className='slider w-full h-full' ref={sliderRef}>
                <h1 className='text-[3.2rem] font-[Tasa-SemiBold] mt-20 text-white text-center'>Gallery</h1>
                <div className="slider-wrapper h-full pb-[280px]" ref={wrapperRef}>
                    {images.map((img, index) => (
                        <div className="slider-item h-full" key={index}>
                            <figure className="relative w-full h-1/2 flex justify-center items-center">
                                <img
                                    src={img}
                                    alt={`Gallery image ${index + 1}`}
                                />
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery1