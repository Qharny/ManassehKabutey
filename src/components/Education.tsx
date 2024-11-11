import React from 'react';
// import Image from 'next/image';

const Education = () => {
    return (
        <div className="bg-[#E9E5F4] p-8">
            <h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">My Education</h2>
            <p className="text-center text-gray-600 mb-8">
                Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
            </p>

            <div className="space-y-6">
                {/* Education Item 1 */}
                <div className="bg-white shadow-lg rounded-lg p-6 flex w-auto">
                    <img 
                        src="https://github.com/Qharny/Qharny.github.io/blob/main/assets/images/educat/college.jpg?raw=true"
                        alt="University of Mines and Technology"
                        className="w-24 h-24 object-cover mr-4"
                    />
                    {/* <Image
                        src="/college.jpg"
                        alt="University of Mines and Technology"
                        fill
                        className="w-auto h-24 object-cover mr-4"
                        priority
                    /> */}
                    <div>
                        <h3 className="text-xl font-semibold">Bachelor Of Computer Science And Engineering</h3>
                        <p className="text-gray-900">University Of Mines And Technology | Tarkwa</p>
                        <p className="text-green-600">2023 - 2026 | Pursuing</p>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 flex">
                    <img 
                        src=".https://github.com/Qharny/Qharny.github.io/blob/main/assets/images/educat/school.jpg?raw=true"
                        alt="Kofi Annan Centre of Excellence"
                        className="w-24 h-24 object-cover mr-4"
                    />
                    <div>
                        <h3 className="text-xl font-semibold">Certificate In Software Development</h3>
                        <p className="text-gray-900">Ghana Indian - Kofi Annan Centre Of Excellence | Accra</p>
                        <p className="text-green-600">2021 - 2022 | Completed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education; 