import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Link from "next/link";

export default function Socials() {
    return (
        <section className="flex p-4 gap-4">
            <a href="https://www.instagram.com/grupododoteatro/" target="_blank">
                <AiOutlineInstagram color="white" size={25}/>
            </a>
                    
            <a href="https://www.facebook.com/dodoteatro/" target="_blank">
                <AiOutlineFacebook color="white" size={25}/>
            </a>

            <a href="https://www.youtube.com/channel/UCzdxtcaJ4VYXFQzZscp19hQ" target="_blank">
                <AiOutlineYoutube color="white" size={25}/>
            </a>

            <a href="https://wa.me/573007558699" target="_blank">
                <AiOutlineWhatsApp color="white" size={25}/>
            </a>
        </section>
    )
}