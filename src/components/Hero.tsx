'use client';

// import React, { Suspense } from 'react';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
// import dynamic from 'next/dynamic';

// Dynamically import the 3D model component with no SSR
// const ThreeDModel = dynamic(() => import('./3DModel'), {
//   ssr: false,
//   loading: () => (
//     <div className="flex items-center justify-center w-[500px] h-[600px]">
//       <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600" />
//     </div>
//   )
// });

const Hero = () => {
    return (
        <div className="bg-[#E9E5F4] min-h-screen relative px-4 sm:px-8 py-8 sm:py-12">

            {/* Left Section - Name */}
            <div className="relative lg:absolute lg:left-20 lg:top-1/2 lg:-translate-y-1/2 z-10 text-center lg:text-left mb-8 lg:mb-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-600 leading-tight">
                    Manasseh<br />Kwame Kabutey.
                    <div className="h-1.5 w-40 bg-blue-600 mt-4 mx-auto lg:mx-0"></div>
                </h1>

                {/* Social Links */}
                <div className="flex gap-6 mt-8 lg:mt-12 justify-center lg:justify-start">
                    <Link
                        href="https://github.com/qharny"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label="github"
                    >
                        <FaGithub size={24} />
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={24} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/manasseh-kabutey"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn size={24} />
                    </Link>
                </div>
            </div>

            {/* Center Section - Image */}
            <div className="relative lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 my-8 lg:my-0">
                <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] lg:w-[700px]">
                    <Image
                        src="/profile2.png"
                        alt="Profile"
                        fill
                        className="object-contain lg:object-cover rounded-lg"
                        priority
                    />
                </div>
            </div>

            {/* Right Section - About */}
            <div className="relative lg:absolute lg:right-20 lg:top-1/2 lg:-translate-y-1/2 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                <p className="text-gray-500 mb-4">-Introducing</p>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-4">
                    Software Engineer,<br />
                    based in Tema.
                </h2>
                <p className="text-gray-600 mb-8">
                    I am a passionate software engineer specializing in mobile and web development. With a diverse skill set spanning multiple technologies, I create robust and user-friendly applications for both mobile devices and the web.
                </p>

                <Link
                    href="/story"
                    className="text-blue-600 flex items-center gap-2 hover:gap-4 transition-all"
                >
                    My story
                    <span>→</span>
                </Link>
            </div>
        </div>
    );
};

export default Hero;