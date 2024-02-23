"use client";
import React, { useState } from 'react';
import styles from '../../styles/DoodlePage/style.module.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        body: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <div className="flex flex-col items-center justify-start h-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#231f20" fillOpacity="1" d="M0,128L48,149.3C96,171,192,213,288,202.7C384,192,480,128,576,106.7C672,85,768,107,864,138.7C960,171,1056,213,1152,197.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                <div className="flex flex-col justify-center items-center -mt-2 lg:-mt-20 h-full w-full bg-[#231f20] pb-32 lg:pb-20 relative">
                    <div className={`flex flex-col relative w-full items-center scale-50 lg:scale-100 ${styles.anim1}`}>
                        <img src="https://www.dropbox.com/scl/fi/9dauk6thirn350lx3ods5/Group-5.png?rlkey=rvw1jwjlnjfowuylzcn5zsz3r&dl=1" className="absolute top-[50%] left-[50%] h-[7rem] w-[13rem] -translate-x-1/2 -translate-y-1/2" />
                        <p className={`text-black text-5xl z-20 ${styles.pang}`}>Let's</p>
                    </div>
                    <h1 className={`text-6xl lg:text-[120px] text-white ${styles.lond} ${styles.anim2} font-black`}>Connect</h1>
                    <div className="flex w-full flex-col-reverse lg:flex-row-reverse justify-center items-center lg:justify-around px-[20px] lg:px-[60px] mt-12 relative">
                        <form action="mailto:anshikathakur147@gmail.com" method='GET' className="w-full lg:w-1/2">
                            <div className="mb-4">
                                <label htmlFor="name" className={`block text-sm font-medium text-white ${styles.pang}`}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`mt-1 p-2 w-full border rounded-md text-white ${styles.pang} bg-transparent border-2 border-l-4 border-b-4 border-white rounded-lg outline-none hover:outline-none focus:outline-none`}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className={`block text-sm font-medium text-white ${styles.pang}`}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`mt-1 p-2 w-full border rounded-md text-white ${styles.pang} bg-transparent border-2 border-l-4 border-b-4 border-white rounded-lg outline-none hover:outline-none focus:outline-none`}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className={`block text-sm font-medium text-white ${styles.pang}`}>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="body"
                                    value={formData.body}
                                    onChange={handleChange}
                                    rows={4}
                                    className={`mt-1 p-2 w-full border rounded-md text-white ${styles.pang} bg-transparent border-2 border-l-4 border-b-4 border-white rounded-lg outline-none hover:outline-none focus:outline-none`}
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className={`mt-1 px-5 py-3 border rounded-md text-white ${styles.pang} bg-transparent border-2 border-l-4 border-b-4 border-white rounded-lg outline-none hover:outline-none focus:outline-none transition-all hover:bg-white hover:text-black hover:font-extrabold`}>
                                    Submit
                                </button>
                            </div>
                        </form>
                        <div className="flex">
                            <img src="https://www.dropbox.com/scl/fi/1wqnz5suij2fop2cjaq5v/Group-6-1.png?rlkey=2e9alygwteen32xe3ik2nqfeh&dl=1" className='w-32 lg:w-48' alt="" />
                            <img src="https://www.dropbox.com/scl/fi/mloykpdv4hq3mdsn4pfhd/Group-6.png?rlkey=fyau414xurzi33s3j7m58e4c9&dl=1" className='w-32 lg:w-48' alt="" />
                        </div>
                        <div className="hidden lg:flex flex-col items-center justify-evenly py-2 bg-white absolute min-h-full w-14 top-0 left-0 rounded-r-2xl shadow-2xl shadow-black">
                            <a href="https://www.linkedin.com/in/anshika75/" className='text-black text-2xl transition-all hover:bg-[#231f20] hover:text-white w-full text-center py-2'><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://github.com/Anshika75" className='text-black text-2xl transition-all hover:bg-[#231f20] hover:text-white w-full text-center py-2'><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.instagram.com/demilune75" className='text-black text-2xl transition-all hover:bg-[#231f20] hover:text-white w-full text-center py-2'><i className="fa-brands fa-instagram"></i></a>
                            <a href="mailto:anshikathakur147@gmail.com" className='text-black text-2xl transition-all hover:bg-[#231f20] hover:text-white w-full text-center py-2'><i className="fa-solid fa-envelope"></i></a>
                            <a href="https://discordapp.com/users/1054336973197811742" className='text-black text-2xl transition-all hover:bg-[#231f20] hover:text-white w-full text-center py-2'><i className="fa-brands fa-discord"></i></a>
                            <a href="https://open.spotify.com/user/ejaxcu4gm4x4f94czuyzn0ip6/" className='text-black text-2xl transition-all hover:bg-[#231f20] hover:text-white w-full text-center py-2'><i className="fa-brands fa-spotify"></i></a>
                            <a href="https://maps.app.goo.gl/Vq4HigC8zHNDQAYHA" className='text-black text-2xl transition-all hover:bg-[#231f20] hover:text-white w-full text-center py-2'><i className="fa-solid fa-location-dot"></i></a>
                            <a href="https://drive.google.com/file/d/1c6Wx-MEUuZakBMDD_tPztfzPBQLaEgT7/view?usp=drive_link" className='text-black text-2xl transition-all hover:bg-[#231f20] hover:text-white w-full text-center py-2'><i className="fa-solid fa-download"></i></a>                    
                        </div>
                    </div>
                    <div className="flex lg:hidden flex-row items-center justify-evenly py-4 bg-white absolute h-14 w-full bottom-0 left-1/2 -translate-x-1/2 rounded-t-2xl shadow-2xl shadow-black">
                            <a href="https://www.linkedin.com/in/anshika75/" className='text-black text-2xl transition-all hover:bg-[#231f20] hover:text-white w-full text-center py-2'><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://github.com/Anshika75" className='text-black text-2xl transition-all hover:bg-[#231f20] hover:text-white w-full text-center py-2'><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.instagram.com/demilune75" className='text-black text-2xl transition-all hover:bg-[#231f20] hover:text-white w-full text-center py-2'><i className="fa-brands fa-instagram"></i></a>
                            <a href="mailto:anshikathakur147@gmail.com" className='text-black text-2xl transition-all hover:bg-[#231f20] hover:text-white w-full text-center py-2'><i className="fa-solid fa-envelope"></i></a>
                            <a href="https://discordapp.com/users/1054336973197811742" className='text-black text-2xl transition-all hover:bg-[#231f20] hover:text-white w-full text-center py-2'><i className="fa-brands fa-discord"></i></a>
                            <a href="https://open.spotify.com/user/ejaxcu4gm4x4f94czuyzn0ip6/" className='text-black text-2xl transition-all hover:bg-[#231f20] hover:text-white w-full text-center py-2'><i className="fa-brands fa-spotify"></i></a>
                            <a href="https://maps.app.goo.gl/Vq4HigC8zHNDQAYHA" className='text-black text-2xl transition-all hover:bg-[#231f20] hover:text-white w-full text-center py-2'><i className="fa-solid fa-location-dot"></i></a>
                            <a href="https://drive.google.com/file/d/1c6Wx-MEUuZakBMDD_tPztfzPBQLaEgT7/view?usp=drive_link" className='text-black text-2xl transition-all hover:bg-[#231f20] hover:text-white w-full text-center py-2'><i className="fa-solid fa-download"></i></a>                            
                        </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
