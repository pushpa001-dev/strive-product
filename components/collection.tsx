"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Collection = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        // Text Parallax/Slide Effect
        gsap.fromTo(textRef.current,
            { x: "-20%" },
            {
                x: "20%",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            }
        );

        // Image Scale/Fade Effect
        gsap.from(imageRef.current, {
            scale: 0.8,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
                toggleActions: "play none none reverse",
            }
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full border-y border-white/10 min-h-screen bg-[#102368] overflow-hidden flex items-center justify-center overflow-x-hidden font-sans text-white">

            {/* Background Text "COLLECTION" */}
            <h1 ref={textRef} className="absolute text-shadow-2xl/90 z-10 select-none text-[12vw] md:text-[160px] 2xl:text-[220px] font-black text-sky-400 tracking-wider leading-none rotate-[30deg] whitespace-nowrap">
                COLLECTION
            </h1>

            {/* Product Image */}
            <div className="relative z-0 mt-0">
                <div ref={imageRef} className="relative w-[280px] md:w-[350px] 2xl:w-[600px] aspect-[0.6] drop-shadow-2xl grayscale brightness-75">
                    <Image
                        src="/strive.png"
                        alt="Strive Face Wash Collection"
                        fill
                        className="object-contain drop-shadow-2xl/90"
                    />
                </div>
            </div>

            {/* Top Right Text */}
            <div className="absolute top-10 right-4 md:right-20 md:top-20 z-30 text-right ">
                <p className="text-sm md:text-base 2xl:text-3xl leading-relaxed">
                    Many reviews say we <br />
                    need to get more stock.
                </p>
            </div>

            {/* Bottom Left Text */}
            <div className="absolute bottom-10 left-4 md:left-20 md:bottom-20 z-30 text-left ">
                <p className="text-sm md:text-base 2xl:text-3xl leading-relaxed">
                    We have many different <br />
                    type of collections.
                </p>
            </div>

        </section>
    );
};

export default Collection;
