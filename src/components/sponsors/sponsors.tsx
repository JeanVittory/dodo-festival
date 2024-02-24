import Image from "next/image"

export default function Sponsors(){
    return(
        <div className="bg-dodoWhite-200">
            <article className="flex  justify-around  items-center  w-full flex-wrap max-w-screen-xl my-0 mx-auto">
                <Image src='static/bbva.png' alt="logo bbva" width={3000} height={902}  className="w-36"></Image>
                <Image src='static/cocacola.png' alt="logo cocacola" width={3000} height={902} className="w-36"></Image>
                <Image src='static/kellogs.png' alt="logo kellogs" width={3000} height={902} className="w-36"></Image>
                <Image src='static/ps5.png' alt="logo ps5" width={3000} height={902} className="w-36"></Image>
                <Image src='static/sprite.png' alt="logo sprite" width={3000} height={902} className="w-36"></Image>
            </article>
        </div>
    )
}