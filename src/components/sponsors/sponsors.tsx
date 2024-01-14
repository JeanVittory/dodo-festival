import Image from "next/image"

export default function Sponsors(){
    return(
        <article className="flex  justify-around items-center mt-20 bg-dodoWhite-200 w-full">
            <Image src='/bbva.png' alt="logo bbva" width={3000} height={902}  className="w-36"></Image>
            <Image src='/cocacola.png' alt="logo cocacola" width={3000} height={902} className="w-36"></Image>
            <Image src='/kellogs.png' alt="logo kellogs" width={3000} height={902} className="w-36"></Image>
            <Image src='/ps5.png' alt="logo ps5" width={3000} height={902} className="w-36"></Image>
            <Image src='/sprite.png' alt="logo sprite" width={3000} height={902} className="w-36"></Image>
        </article>
    )
}