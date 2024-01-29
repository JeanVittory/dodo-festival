import { nunito800 } from "@/lib/fonts"
import Image from "next/image"

export default function Label() {
    return (
        <section className= {`${nunito800.className} text-dodoWhite-100 flex flex-col items-center text-sm`}>
            <Image src='/static/logo-dodo.png' alt="logo dodo" width={70} height={70}/>
            <div className="flex flex-col items-center mt-1 text-[10px]">
                <p>CORPORACIÓN ARTISTICA</p>
                <p>BUGA-VALLE</p>
            </div>
        </section>
    )
}