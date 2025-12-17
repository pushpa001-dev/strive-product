"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Review = () => {
    const containerRef = useRef(null);
    const leftColRef = useRef(null);
    const rightColRef = useRef(null);
    const titleRef = useRef(null);
    const reviewTextRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                end: "bottom bottom",
                toggleActions: "play none none reverse",
            }
        });

        tl.from(leftColRef.current, { x: -100, opacity: 0, duration: 1, ease: "power3.out" })
            .from(rightColRef.current, { x: 100, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8")
            .from(titleRef.current, { y: 50, opacity: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.5")
            .from(reviewTextRef.current, { y: 20, opacity: 0, duration: 0.8 }, "-=0.6");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative overflow-x-hidden w-full min-h-screen bg-[#102368] overflow-hidden flex flex-col md:flex-row font-sans text-white">

            {/* Left Content Half */}
            <div ref={leftColRef} className="relative w-full md:w-1/2 flex flex-col justify-between p-8 md:p-16 z-10">
                {/* Background decorative shape (darker arc) */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0c1a50] rounded-tr-[100%] z-[-1] pointer-events-none opacity-80"></div>

                {/* Header */}
                <h2 ref={titleRef} className="text-[15vw] md:text-[8rem] 2xl:text-[12rem] font-black text-sky-400 tracking-tighter leading-none select-none uppercase">
                    REVIEW
                </h2>

                {/* Testimonial Quote */}
                <div ref={reviewTextRef} className="self-end md:mr-10 mb-10 md:mb-20 text-right max-w-[400px]">
                    <p className="text-xl md:text-2xl 2xl:text-4xl leading-normal font-light mb-4">
                        I felt my skin starting to
                        <br />
                        glowing in just a week
                        <br />
                        this works like a magic.
                    </p>
                    <p className="text-lg md:text-xl 2xl:text-3xl font-medium tracking-wide">
                        -Anna
                    </p>
                </div>
            </div>

            {/* Right Image Half */}
            <div ref={rightColRef} className="relative w-full md:w-1/2 h-[50vh] md:h-auto">
                <Image
                    src="/review.jpeg"
                    alt="Woman with face wash"
                    fill
                    className="object-cover"
                />
            </div>

        </section>
    );
};

export default Review;
