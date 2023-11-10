
import Image from "next/image";

export default function CardF(props) {
  return (
    <div ref={props.pro.ref} className="text-center shadow-lg p-10 bg-cyan-950 rounded-xl my-10 dark:bg-sky-950 flex-1">
      <Image src={props.pro.image} alt='this is image' width='100' />
      <h3 className="text-lg font-medium pt-8 pb-2 ">
        {props.pro.h3}
      </h3>
      <p className="py-2">
        {props.pro.p1}
      </p>
      <h4 className="py-4 text-teal-600">{props.pro.h4}</h4>
      <p className="text-cyan-500 py-1">{props.pro.p2}</p>
      <p className="text-cyan-500 py-1">{props.pro.p3}</p>
      <p className="text-cyan-500 py-1">{props.pro.p4}</p>


    </div>)
}