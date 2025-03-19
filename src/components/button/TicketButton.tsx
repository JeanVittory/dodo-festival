
import { WHATSAPP_PHONE } from "@/lib/constants";
import { nunito700 } from "@/lib/fonts";
interface IButtonProps{
    text:string;
}

export default function TicketButton({text}:IButtonProps){

    return (
        <div className="relative mt-10 mb-12 group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-400 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <button className={`${nunito700.className} text-dodoWhite-200 relative  bg-dodoRed-100  py-2 px-5  rounded-2xl  text-xl tracking-widest  leading-none group-hover:text-dodoWhite-300 transition duration-200`}>
                <a href={`https://wa.me/${WHATSAPP_PHONE}`}  target="_blank">{text}</a>
            </button>
        </div>
    )
}