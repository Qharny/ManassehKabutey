'use client';

// import React, { Suspense } from 'react';
import Link from 'next/link';
import {FaTwitter, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
// import dynamic from 'next/dynamic';

// Dynamically import the 3D model component with no SSR
// const ThreeDModel = dynamic(() => import('./3DModel'), {
//   ssr: false,
//   loading: () => (
//     <div className="flex items-center justify-center w-[500px] h-[600px]">
//       <div className="w-32 h-32 border-b-2 border-blue-600 rounded-full animate-spin" />
//     </div>
//   )
// });

const Hero = () => {
    return (
        <div className="bg-[#E9E5F4] min-h-screen relative px-4 sm:px-8 py-8 sm:py-12">

            {/* Left Section - Name */}
            <div className="relative z-10 mb-8 text-center lg:absolute lg:left-20 lg:top-1/2 lg:-translate-y-1/2 lg:text-left lg:mb-0">
                <h1 className="text-4xl font-bold leading-tight text-gray-600 sm:text-5xl md:text-6xl lg:text-7xl">
                    Manasseh<br />Kwame Kabutey.
                    <div className="h-1.5 w-40 bg-blue-600 mt-4 mx-auto lg:mx-0"></div>
                </h1>

                {/* Social Links */}
                <div className="flex justify-center gap-6 mt-8 lg:mt-12 lg:justify-start">
                    <Link
                        href="https://github.com/qharny"
                        className="text-gray-600 transition-colors hover:text-blue-600"
                        aria-label="github"
                    >
                        <FaGithub size={24} />
                    </Link>
                    <Link
                        href="https://www.instagram.com/mr_kabuteyy"
                        className="text-gray-600 transition-colors hover:text-blue-600"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={24} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/manasseh-kabutey"
                        className="text-gray-600 transition-colors hover:text-blue-600"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn size={24} />
                    </Link>
                    <Link
                        href="https://twitter.com/mr_kabuteyy"
                        className="text-gray-600 transition-colors hover:text-blue-600"
                        aria-label="X"
                    >
                        <FaTwitter size={24} />
                    </Link>
                </div>
            </div>

            {/* Center Section - Image */}
            <div className="relative my-8 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:my-0">
                <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] lg:w-[700px]">
                    <Image
                        src="/profile2.png"
                        alt="Profile"
                        fill
                        className="object-contain rounded-lg lg:object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Right Section - About */}
            <div className="relative max-w-md mx-auto text-center lg:absolute lg:right-20 lg:top-1/2 lg:-translate-y-1/2 lg:mx-0 lg:text-left">
                <p className="mb-4 text-gray-500">-Introducing</p>
                <h2 className="mb-4 text-xl font-semibold text-gray-600 sm:text-2xl">
                    Software Engineer,<br />
                    based in Tema.
                </h2>
                <p className="mb-8 text-gray-600">
                    I am a passionate software engineer specializing in mobile and web development. With a diverse skill set spanning multiple technologies, I create robust and user-friendly applications for both mobile devices and the web.
                </p>

                <Link
                    href="/story"
                    className="flex items-center gap-2 text-blue-600 transition-all hover:gap-4"
                >
                    My story
                    <span>→</span>
                </Link>
            </div>
        </div>
    );
};

export default Hero;