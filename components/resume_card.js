import Image from "next/image";

export default function CardR(props) {
    return (
        <div>
            <Image height={props.sizeh} src={props.img} alt='this is image' />
        </div>)
}