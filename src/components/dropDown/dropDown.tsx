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




export default function Dropdown(){
    return (
        <DropdownMenu >
            <DropdownMenuTrigger>
                <RiMenu3Fill color="white" size={35}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={`${nunito800.className} h-72 bg-dodoBlack-100 text-dodoWhite-100  p-4  rounded-xl flex flex-col justify-center items-center`}>
                <div className="h-[90%] w-full flex flex-col justify-center items-center  divide-y">
                    <DropdownMenuLabel className="tracking-wider w-full text-center py-5">PROGRAMACION</DropdownMenuLabel>
                    <DropdownMenuLabel className="tracking-wider w-full text-center py-5">TALLERES</DropdownMenuLabel>
                    <DropdownMenuLabel className="tracking-wider w-full text-center py-5">CHARLAS</DropdownMenuLabel>
                </div>

                <DropdownMenuItem className="h-[10%] items-end gap-x-4">
                    <div>
                        <AiOutlineInstagram color="white" size={25}/>
                    </div>

                    <div>
                        <AiOutlineFacebook color="white" size={25}/>
                    </div>

                    <div>
                        <AiOutlineYoutube color="white" size={25}/>
                    </div>

                    <div>
                        <AiOutlineWhatsApp color="white" size={25}/>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}