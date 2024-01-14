import Image from "next/image";

export default function HeroImageHome(){
    return (
        <section className="mt-16">
            <Image src='/hero-image.png' alt="Festival flyer" width={940} height={850} className="w-[700px]"></Image>
        </section>
    )
}