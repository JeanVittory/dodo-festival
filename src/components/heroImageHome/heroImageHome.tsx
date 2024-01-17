import Image from "next/image";
import Button from "../button/Button";

export default function HeroImageHome(){
    return (
        <section className="mt-16 flex flex-col items-center">
            <Image src='/hero.png' alt="Festival flyer" width={940} height={950} className="w-[700px]"></Image>
            <Button text='TICKETS'/>
        </section>
    )
}