import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RiMenu3Fill } from "react-icons/ri";
import { nunito800 } from "@/lib/fonts"
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Link from "next/link";




export default function Dropdown(){
    return (
    <DropdownMenu modal={false}>
            <DropdownMenuTrigger>
                <RiMenu3Fill color="white" size={35}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={`${nunito800.className} h-72 bg-dodoBlack-100 text-dodoWhite-100  mr-4  p-4  rounded-xl flex flex-col justify-center items-center`}>
                <div className="h-[90%] w-full flex flex-col justify-center items-center  divide-y">
                    <DropdownMenuLabel className="tracking-wider w-full text-center py-5"><Link href='/programacion'>PROGRAMACION</Link></DropdownMenuLabel>
                    <DropdownMenuLabel className="tracking-wider w-full text-center py-5"><Link href='/talleres'>TALLERES</Link></DropdownMenuLabel>
                    <DropdownMenuLabel className="tracking-wider w-full text-center py-5"><Link href="/charlas">CHARLAS</Link></DropdownMenuLabel>
                </div>

                <DropdownMenuItem className="h-[10%] items-end gap-x-4">
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
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}