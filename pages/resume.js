"use client"
import { useContext } from "react";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import Link from "next/link";
import Image from 'next/image'
import { DarkModeContext } from "../contexts/DarkModeContext"
import Head from "next/head";

export default function Resume() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return <div className={darkMode ? "dark" : ""}>

        <main className="px-10 dark:bg-gray-900 bg-white lg:px-20">
            <section className=" min-h-screen ">
                <nav className="py-10 mb-12 flex justify-between dark:text-white">
                    <h1 className="font-burtons text-xl  text-gray-800 dark:text-white">mikimelese</h1>
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

            </section>;
        </main>
    </div>
}

// export default Resume;