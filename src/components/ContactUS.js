import React, { useState } from 'react';
import axios from 'axios';

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', formData.name);
        console.log('Email:', formData.email);
        console.log('Message:', formData.message);

        const newContact = {
            name: formData.name,
            email: formData.email,
            message: formData.message
        }

        axios.post('https://plants-detection-backend-vercel.vercel.app/contact', newContact)

        setIsSent(true);

        setFormData({
            name: '',
            email: '',
            message: '',
        });

        setTimeout(() => {
            setIsSent(false);
        }, 5000);

    };

    return (
        <div className="bg-gray-100 min-h-screen bg-gradient-to-t from-lime-400 to-lime-50 p-6 backdrop-blur-sm">
            <main className="container mx-auto my-4 bg-white rounded-lg shadow p-6  md:flex md:justify-center md:gap-4">
                <div className="bg-white grow ">
                    <h2 className="font-bold text-slate-800 text-center text-5xl font-bold leading-7 grow shrink basis-auto max-md:max-w-full max-md:text-4xl max-md:leading-6">Contact Us</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email *
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                type="text"
                                placeholder="Message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="flex items-center justify-between ">
                            <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" type="submit">
                                Send
                            </button>
                        </div>
                        {isSent && (
                        <div className="mb-4 text-green-600 font-bold">
                            Message sent successfully! we'll get back to you ASAP.
                        </div>
                    )}
                    </form>
                </div>
                {/*  */}
                <hr className='m-6'/>
                <div className=" pl-6 flex items-stretch justify-center bg-white">
                    <ul className="mb-6 md:mb-0">
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-6 w-6">
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                    </path>
                                </svg>
                            </div>
                            <div class="ml-4 mb-4">
                                <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 ">Our Address</h3>
                                <p class="text-gray-600 ">BP 575, Avenue Abdelkrim Khattabi, 40000,</p>
                                <p class="text-gray-600 ">Guéliz-Marrakech</p>
                            </div>
                        </li>
                        <li class="flex">
                            <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-6 w-6">
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">Contact
                                </h3>
                                <p className="text-gray-600 ">Mobile: +212 600-000000 (Not yet)</p>
                                <p className="text-gray-600  underline decoration-indigo-500">Mail: 
                                    <a href="mailto:el.failali.lbalghiti@gmail.com" className='hover:text-blue-900 '> el.failali.lbalghiti@gmail.com</a> 
                                </p>

                            </div>
                        </li>
                    </ul>
                </div>

            </main>
        </div>
    );
};

export default ContactUsPage;
