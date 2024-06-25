import React from 'react';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import bg from '../Images/footer-bg.jpg'

function Footer() {
    return (
        <footer className="max-md:fixed bottom-0 w-full py-6 text-gray-50" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 opacity-90 w-full">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-center md:order-2 space-x-4 text-2xl">
                      
                        <a
                            href="https://wa.me/your-whatsapp-number"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 hover:scale-110"
                        >
                            <FaWhatsapp />
                        </a>
                        <a
                            href="https://instagram.com/your-instagram-username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 hover:scale-110"
                        >
                            <FaInstagram />
                        </a>
                        <a href="tel:your-phone-number" className="hover:text-gray-300 hover:scale-110">
                            <MdPhone />
                        </a>
                        <a href="mailto:your-email@example.com" className="hover:text-gray-300 hover:scale-110">
                            <MdEmail />
                        </a>
                        <a
                            href="https://linkedin.com/in/your-linkedin-username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 hover:scale-110"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <div className="mt-8 max-md:mt-3 md:mt-0 md:order-1 flex justify-center z-50 md:-ml-16">
                        <a href="#" className='text-2xl'>
                            {/* Like button with heart emoji */}
                            <span role="img" aria-label="Heart">❤️</span> Guru
                        </a>
                    </div>
                    <div className="mt-8 max-md:mt-3 md:mt-0 md:order-1 flex justify-center">
                        <p className="text-center">© 2024 MCA Project.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
