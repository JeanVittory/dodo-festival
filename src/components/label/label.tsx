import { nunito800 } from "@/lib/fonts"
import Image from "next/image"

export default function Label() {
    return (
        <section className= {`${nunito800.className} text-dodoWhite-100 flex flex-col items-center text-sm`}>
            <Image src='/logo-dodo.png' alt="logo dodo" width={100} height={100}/>
            <div className="flex flex-col items-center mt-3">
                <p>CORPORACIÓN ARTISTICA</p>
                <p>BUGA-VALLE</p>
            </div>
        </section>
    )
}