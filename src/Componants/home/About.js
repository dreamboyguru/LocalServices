import React from 'react';

const AboutUsPage = () => {
    return (
        <div className="h-98 flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCab0xogEdu7vtvsTu-my9W01fXp9SntvPHezKqOHzfsl3H2R2BPV_BPs018NBsMRBY6Q&usqp=CAU')"}}>
            <div className="bg-gray-100 text-black bg-opacity-90 p-8 rounded-lg shadow-lg w-[40%] h-98">
                <div className="">
                    <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                    <p className="mb-4">Our mission is to deliver the best services tailored to your needs.</p>
                    <h3 className="text-xl font-bold mb-2">Services Offered</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Transportation Services (Drivers)</li>
                        <li>Home Services (Plumbers, Cooks)</li>
                        <li>Security Services (Guardians, Watchmen)</li>
                        <li>Healthcare Services (Doctors, Nurses)</li>
                    </ul>
                    <h3 className="text-xl font-bold mb-2">Why Choose Us</h3>
                    <p className="mb-4">With years of experience and a commitment to customer satisfaction, we strive to deliver excellence.</p>
                    <h3 className="text-xl font-bold mb-2">Meet the Team</h3>
                    <p className="mb-4">Our team consists of dedicated professionals with expertise in their respective fields.</p>
                    <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                    <p>If you have any questions or inquiries, feel free to contact us at [phone number] or [email address].</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
