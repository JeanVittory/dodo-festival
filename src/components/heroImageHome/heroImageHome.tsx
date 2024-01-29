import Image from "next/image";
import TicketButton from "../button/TicketButton";


export default function HeroImageHome(){
    return (
        <section className="mt-16 flex flex-col items-center">
            <Image src='/static/hero.png' alt="Festival flyer" width={940} height={950} className="w-[700px]"></Image>
            <TicketButton text='TICKETS'/>
        </section>
    )
}