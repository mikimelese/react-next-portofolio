import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
// import "../../public/static/Card.css";

export default function Card(tt) {
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const [qq, setQq] = useState(null);
  // const cardRef = useRef(null);
  const imgRef = useRef(null);
  const shadowRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const sizesboxRef = useRef(null);
  const purchaseRef = useRef(null);


  // useEffect(() => {
  //   if (cardRef.current) {
  //     const { top } = cardRef.current.getBoundingClientRect();
  //     // setOffsetTop(window.pageYOffset + top);
  //     console.log(top)
  //   }
  // }, []);

  function handleMouseMove(event) {
    const card = tt.rr.refer.current;
    if (!card) return
    const { top } = card.getBoundingClientRect();
    const { offsetWidth: width, offsetHeight: height } = card;
    const { clientX, clientY } = event;
    const x = clientX - card.offsetLeft - width / 2;
    const y = clientY - top - height / 2;
    var mult = 40;
    setXRotation((x / width) * mult);
    setYRotation((y / height) * mult);
  }
  function handleMouseEnter() {
    const img = imgRef.current;
    const sha = shadowRef.current;
    const title = titleRef.current;
    const sizesBox = sizesboxRef.current;
    const purchase = purchaseRef.current;
    const desc = descRef.current
    title.style.transform = "translateZ(150px)";
    img.style.transform = "translateZ(150px) translateY(-20px) translateX(30px) ";
    sizesBox.style.transform = "translateZ(100px)";
    sha.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(90px)";
    desc.style.transform = "translateZ(80px)";
    setQq("shadoww")
  }
  function handleMouseLeave() {
    setXRotation(0);
    setYRotation(0);
    const img = imgRef.current;
    const sha = shadowRef.current;
    const title = titleRef.current;
    const sizesBox = sizesboxRef.current;
    const purchase = purchaseRef.current;
    title.style.transform = "translateZ(0px)";
    img.style.transform = "translateZ(0px) rotateZ(0deg)";
    sizesBox.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    sha.style.transform = "translateZ(0px)";
    setQq(null)
    sizesBox.style.transform = "translateZ(100px)";
  }
  function handleScroll() {
    const src = tt.rr.ref.current;
    if (!src) return
    src.scrollIntoView({ behavior: "smooth" });
    // useEffect(() => {
    //   src.current.scrollIntoView({ behavior: "smooth" })
    // });
  };
  return (
    <div>
      <div
        className={`card ${tt.rr.cardt}`}
        ref={tt.rr.refer}
        style={{
          transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`${qq}  transition-transform duration-200`}
          ref={shadowRef}>
        </div>
        <Image
          ref={imgRef}
          src={tt.rr.ima}
          width='100'

          alt="this is icon image"
          className="relative transition-transform ease-linear bottom-10 left-1/3  duration-150"
        />
        <h1 className=" absolute top-12 left-11 text-2xl title text-center text-white shadow-zinc-50" ref={titleRef}>
          {tt.rr.title}
        </h1>
        <p className="text-white bottom-10" ref={descRef}>
          {tt.rr.description}
        </p>
        <ul className="sizes-box text-zinc-800" ref={sizesboxRef}>
          <li>{tt.rr.type}</li>
        </ul>
        <div className="button-box" ref={purchaseRef}>
          <button className="purchase" onClick={handleScroll} >
            read more
          </button>
        </div>
      </div>
    </div>
  );
}
