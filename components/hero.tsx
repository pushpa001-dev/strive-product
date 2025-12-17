"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const navRef = useRef(null);
    const leftTextRef = useRef(null);
    const rightTextRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Initial load animations
        tl.from(containerRef.current, { autoAlpha: 0, duration: 0.5 })
            .from(navRef.current, { y: -50, opacity: 0, duration: 1, ease: "power3.out" })
            .from(
                textRef.current,
                { scale: 0.5, opacity: 0, duration: 1.5, ease: "elastic.out(1, 0.3)" },
                "-=0.5"
            )
            .from(
                imageRef.current,
                { scale: 0.8, opacity: 0, duration: 1, ease: "power2.out" },
                "-=1"
            )
            .from(
                [leftTextRef.current, rightTextRef.current],
                { x: (i) => (i === 0 ? -50 : 50), opacity: 0, duration: 1, ease: "power2.out" },
                "-=0.5"
            );

        // Continuous floating animation for the product
        gsap.to(imageRef.current, {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full min-h-screen overflow-x-hidden bg-[#102368] overflow-hidden flex flex-col font-sans text-white invisible">
            {/* Background Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1a2d7d] rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            {/* Navigation */}
            <nav ref={navRef} className=" top-0 z-20 flex items-center justify-between  px-8 py-6 md:px-16">
                <div className="text-xl font-medium tracking-wide">Strive</div>
                <div className="hidden md:flex items-center gap-12 text-lg font-light tracking-wide">
                    <a href="#" className="hover:opacity-80 transition-opacity">Home</a>
                    <a href="#" className="hover:opacity-80 transition-opacity">About</a>
                    <a href="#" className="hover:opacity-80 transition-opacity">Products</a>
                </div>
                <div className="text-xl font-medium tracking-wide">
                    <a href="#" className="hover:opacity-80 transition-opacity">Book</a>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative flex-grow flex items-center justify-center w-full max-w-[1400px] mx-auto px-4">

                {/* Big Background Text */}
                <h1 ref={textRef} className="absolute z-0 top-10 select-none text-[18vw] md:text-[220px] 2xl:text-[350px] font-black text-sky-400 tracking-wider leading-none text-center w-full">
                    STRIVE
                </h1>

                {/* Product Image */}
                <div ref={imageRef} className="relative z-10 mt-10 md:mt-0">
                    <div className="relative w-[280px] md:w-[350px] 2xl:w-[600px] aspect-[0.6] ">
                        {/* Using style to center perfectly if next/image behaves oddly with layout fill */}
                        <Image
                            src="/strive.png"
                            alt="Strive Face Wash"
                            fill
                            className="object-contain drop-shadow-2xl/90 "
                            priority
                        />
                    </div>
                </div>

                {/* Left Text */}
                <div ref={leftTextRef} className="absolute z-20 left-4 md:left-20 bottom-10 md:bottom-auto md:top-1/2 md:-translate-y-1/2 max-w-[200px] md:max-w-[250px] text-sm md:text-base leading-relaxed hidden md:block">
                    <p>
                        The Strive product reviews are insanely high rated so you have trust to proceed.
                    </p>
                </div>

                {/* Right Text */}
                <div ref={rightTextRef} className="absolute z-20 right-4 md:right-20 bottom-10 md:bottom-auto md:top-1/2 md:-translate-y-1/2 text-right">
                    <div className="flex flex-col items-end gap-1">
                        <p className="text-base md:text-xl 2xl:text-4xl font-bold">Home made.</p>
                        <div className="h-[2px] w-full bg-white/50 my-1"></div>
                        <p className="text-base md:text-xl 2xl:text-4xl font-bold">Best Ingredients.</p>
                        <div className="h-[2px] w-full bg-white/50 my-1"></div>
                        <p className="text-base md:text-xl 2xl:text-4xl font-bold">With Love</p>
                        <div className="h-[2px] w-full bg-white/50 my-1"></div>
                    </div>
                </div>
            </main>

            {/* Mobile only left text bottom positioning if needed, keeping it simple for now matching desktop 'exact' request mostly but responsive */}
            <div className="md:hidden absolute bottom-8 left-8 right-8 text-center text-sm md:text-base 2xl:text-2xl z-20 opacity-80">
                The Strive product reviews are insanely high rated so you have trust to proceed.
            </div>
            <div className=" w-[70vw] h-[70vw] rounded-full bg-[#122057] absolute top-1/1 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]" />
        </section>
    );
};

export default Hero;
