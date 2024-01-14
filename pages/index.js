import Image from 'next/image'
import Head from "next/head";
import Link from "next/link";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube
} from 'react-icons/ai';
import { useEffect, useState, useRef, useContext } from "react";
import miki from '../public/images/myicon.svg'
import reactt from '../public/images/reactt.png'
import nodet from '../public/images/nodet.svg'
import sveltet from '../public/images/svelte-logo-square.png'
import postgresqlt from '../public/images/postgresqlt.png'
import expressjst from '../public/images/expressjst.png'
import mongodbt from '../public/images/mongodbt.png'

import Card from '../components/Card';
import CardF from '../components/cardF';

import { DarkModeContext } from '../contexts/DarkModeContext';

export default function Home() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const cardRef = useRef(null);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  const cardRef4 = useRef(null);
  const cardRef5 = useRef(null);

  const detailRef = useRef(null);
  const detailRef1 = useRef(null);
  const detailRef2 = useRef(null);
  const detailRef3 = useRef(null);
  const detailRef4 = useRef(null);
  const detailRef5 = useRef(null);


  const prop = [
    {
      image: reactt,
      ref: detailRef,
      h3: 'Beautiful Designs and User Experiance',
      h4: 'what can I do?',
      p1: "landing page",
      p2: 'fast and relaible webpage',
      p3: 'can connect with backend',
      p4: 'animations',
    },
    {
      image: sveltet,
      ref: detailRef1,
      h3: 'Beautiful Designs and User Experiance',
      h4: 'what can I do?',
      p1: 'responsive wabpages',
      p2: "landing page",
      p3: 'fast webpages',
      p4: 'can connect with backend',

    },
    {
      image: nodet,
      ref: detailRef2,
      h3: 'Fast and Relaible APIs',
      h4: 'what can I do?',
      p1: "connect with database",
      p2: 'smoth response',
      p3: 'can do autentication',
      p4: 'can work with other APIs',
    },
    {
      image: expressjst,
      ref: detailRef3,
      h3: 'Fast and Relaible APIs',
      h4: 'what can I do?',
      p1: "connect with database",
      p2: 'smoth response',
      p3: 'can do autentication',
      p4: 'can work with other APIs',
    },
    {
      image: postgresqlt,
      ref: detailRef4,
      h3: 'Work Related to Database',
      h4: 'what can I do?',
      p1: "design of database",
      p3: 'can make relation',
      p2: 'can connect with frontend',
      p4: 'fast feching and writing',
    },
    {
      image: mongodbt,
      ref: detailRef5,
      h3: 'Work Related to Non-relational Database',
      h4: 'what can I do?',
      p1: "design of database",
      p3: 'can be scalable',
      p2: 'can connect with frontend',
      p4: 'fast feching and writing',
    },
  ]
  const yg = [
    {
      refer: cardRef,
      ref: detailRef,
      title: "React",
      ima: reactt,
      type: "front-end",
      description: "React: A popular JavaScript library for building interactive user interfaces with a component-based approach.",
      cardt: "card1"
    },
    {
      refer: cardRef1,
      ref: detailRef1,
      title: "Svelte",
      ima: sveltet,
      type: "front-end",
      description: "Svelte: A modern JavaScript framework that compiles components at build time, resulting in optimized web applications with a small bundle size.",
      cardt: "card2"
    },
    {
      refer: cardRef2,
      ref: detailRef2,
      title: "Node.js",
      ima: nodet,
      type: "back-end",
      description: "Node.js: A runtime environment that enables server-side JavaScript execution, facilitating scalable and efficient web application development.",
      cardt: "card3"
    },
    {
      refer: cardRef3,
      ref: detailRef3,
      title: "Express.js",
      ima: expressjst,
      type: "back-end",
      description: "Express.js: A minimalistic web application framework for Node.js, providing a simple and flexible approach to building APIs and web applications.",
      cardt: "card4"
    },
    {
      refer: cardRef4,
      ref: detailRef4,
      title: "PostgreSQL",
      ima: postgresqlt,
      type: "database",
      description: "PostgreSQL: A powerful open-source relational database management system (RDBMS) known for its advanced features, reliability, and data integrity.",
      cardt: "card5"
    },
    {
      refer: cardRef5,
      ref: detailRef5,
      title: "MongoDB",
      ima: mongodbt,
      type: "database",
      description: "MongoDB: A flexible NoSQL document database with high scalability and performance, ideal for storing unstructured or semi-structured data in various applications.",
      cardt: "card6"
    }
  ]

  return (

    <div className={`${darkMode ? "dark" : ""} `}>

      <main className="px-3 sm:px-10 dark:bg-gray-900 bg-white overflow-y-hidden overflow-x-hidden">
        <section className=" min-h-screen ">
          <nav className="py-10 sm:mb-12 mb-4 flex justify-between gap-5 dark:text-white">
            <h1 className="font-A_Space_Heavy_Demo text-xl  text-gray-800 dark:text-white">mikimelese</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={toggleDarkMode}
                  className=" cursor-pointer text-2xl dark:text-cyan-300 text-black"
                />
              </li>
              <li>
                <Link href="/resume"
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-2 sm:px-4 py-2 border-none rounded-md ml-4 sm:ml-8">
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-center  sm:p-10 py-2 sm:py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Mikyas Melese
            </h2>
            <h3 className="text-2xl py-2  text-gray-800 dark:text-white md:text-3xl">
              Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <Link href="https://www.twitter.com" passHref target="_blank" rel="noopener noreferrer" >
                <AiFillTwitterCircle />
              </Link>

              <Link href="https://www.linkedin.com" passHref target="_blank" rel="noopener noreferrer" >
                <AiFillLinkedin />
              </Link>

            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full scale-75 sm:transform-none w-80 h-80 relative overflow-hidden mt-6 sm:mt-20 ">

              <Image
                src={miki}
                alt='this is image'
                placeholder="blur"
                blurDataURL='../public/images/avatarmaker.svg'
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
        <section className='flex'>
          <div className='flex-initial w-96'></div>
          <div className='flex gap-10  justify-center flex-row flex-wrap '>
            {yg.map((yyy, index) => (
              <Card key={index} rr={yyy} />
            ))}
          </div>
          <div className='flex-initial w-96'></div>
        </section>
        <section className='px-4 sm:px-60 mb-0'>
          {prop.map((pp, ind) => (
            <CardF key={ind} pro={pp} />
          ))}
        </section>
      </main>
    </div >

  )
}
