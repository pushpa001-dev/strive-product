"use client";
import React, { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Order = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            }
        });

        tl.from(titleRef.current, { scale: 3, opacity: 0, duration: 1.2, ease: "power4.out" })
            .from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
            .from(buttonRef.current, { y: 20, opacity: 0, scale: 0.8, duration: 0.8, ease: "back.out(1.7)" }, "-=0.6");

        // Continuous pulse for button
        gsap.to(buttonRef.current, {

            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full min-h-screen overflow-x-hidden bg-[#102368] border-t border-white/10 flex flex-col items-center justify-center font-sans text-white px-4">

            {/* Header */}
            <h2 ref={titleRef} className="text-[20vw] md:text-[250px] 2xl:text-[350px] font-black text-sky-400 tracking-wider leading-none select-none uppercase mb-8 md:mb-12">
                ORDER
            </h2>

            {/* Subtitle */}
            <p ref={subtitleRef} className="text-sm md:text-xl 2xl:text-2xl  text-center mb-10 font-bold px-4 md:px-0">
                Just click the book button below and get your bottle for 50 % offer
            </p>

            {/* Button */}
            <button ref={buttonRef} className="bg-[#2e9aff] hover:bg-sky-400 transition-colors text-white text-sm md:text-base font-medium py-3 px-12 md:py-4 md:px-16 uppercase tracking-wider">
                Book
            </button>

        </section>
    )
}

export default Order
