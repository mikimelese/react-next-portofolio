import Image from 'next/image'
import Head from "next/head";
import Link from "next/link";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import tte from "./components/Shoe-img/";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube
} from 'react-icons/ai';
import { useEffect, useState, useRef, useContext } from "react";

import deved from '../public/images/dev-ed-wave.png';
import miki from '../public/images/avatarmaker.svg'
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
  //const [darkMode, setDarkMode] = useState(false);
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
      // p5: 'Indesign'
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
  //const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  // function round() {
  //   setDarkMode(!darkMode)
  //   console.log(darkMode);
  // }
  // function handleScroll(src) {
  //   src.current.scrollIntoView({ behavior: "smooth" });
  //   // useEffect(() => {
  //   //   src.current.scrollIntoView({ behavior: "smooth" })
  //   // });
  // };
  return (
    // <Router>
    // <DarkModeProvider>
    <div className={darkMode ? "dark" : ""}>
      {/* <Head>
        <title>portofolio</title>
        <meta name="description" content="Generated by mikyas" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main className="px-10 dark:bg-gray-900 bg-white lg:px-20">
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
                <Link href="/resume"
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
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
              {/* <AiFillTwitterCircle /> */}
              <Link href="https://www.linkedin.com" passHref target="_blank" rel="noopener noreferrer" >
                <AiFillLinkedin />
              </Link>

            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 ">
              {/* <Image src={miki} alt='this is image' layout="fill" objectFit="cover" /> */}
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
        <section className='px-60'>
          {prop.map((pp, ind) => (
            <CardF key={ind} pro={pp} />
          ))}
        </section>
      </main>
      {/* <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch> */}
    </div >
    // </DarkModeProvider>
    // </Router>
  )
}
// import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <main
//       className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
//     >
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">pages/index.js</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Discover and deploy boilerplate example Next.js&nbsp;projects.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }
