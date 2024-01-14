//"use client"
import { useContext } from "react";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import Link from "next/link";
import Image from 'next/image'
import { DarkModeContext } from "../contexts/DarkModeContext"
import Head from "next/head";
import CardR from "../components/resume_card.js"
import phone_1 from "../public/images/previous_work/IMG_p1.JPG"
import phone_2 from "../public/images/previous_work/IMG_p2.JPG"
import phone_3 from "../public/images/previous_work/IMG_p3.JPG"
import phone_4 from "../public/images/previous_work/IMG_p4.JPG"
import computer_1 from "../public/images/previous_work/IMG-c1.png"
import computer_2 from "../public/images/previous_work/IMG-c2.png"
import computer_3 from "../public/images/previous_work/IMG-c3.png"
import computer_4 from "../public/images/previous_work/IMG-c4.png"
import computer_5 from "../public/images/previous_work/IMG-c5.png"

export default function Resume() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const pro = [phone_1, phone_2, phone_3, phone_4];
    const pro2 = [computer_1, computer_2, computer_3, computer_4, computer_5];
    return <div className={`${darkMode ? "dark" : ""} min-w-full`}>

        <main className="px-10 dark:bg-gray-900 bg-white">
            <section className=" min-h-screen ">
                <nav className="py-10 mb-12 flex justify-between dark:text-white">
                    <h1 className="font-A_Space_Heavy_Demo text-xl  text-gray-800 dark:text-white">mikimelese</h1>
                    <ul className="flex items-center">
                        <li>
                            <BsFillMoonStarsFill
                                onClick={toggleDarkMode}
                                className=" cursor-pointer text-2xl dark:text-cyan-300 text-black"
                            />
                        </li>
                        <li>
                            <Link href="/"
                                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">
                                Home
                            </Link>
                        </li>
                    </ul>
                </nav>
                <h1 className="text-xl  text-gray-800 dark:text-white mb-8">Mobile application for android with flutter</h1>
                <div className="flex flex-row flex-wrap justify-center gap-4">
                    {pro.map((img, index) => (
                        <div className="p-4 bg-slate-900 rounded-lg">
                            <CardR key={index} img={img} sizeh={600} />
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h1 className="text-xl  text-gray-800 dark:text-white mb-8">computer application for windows with python</h1>
                <div className="flex flex-col justify-center gap-4">
                    {pro2.map((img, index) => (
                        // <div className="p-4 bg-slate-900 rounded-lg">
                        <CardR key={index} img={img} sizeh={"auto"} />
                        // </div>
                    ))}
                </div>
            </section>
        </main>
    </div>
}

// export default Resume;