import { poppins700 } from "@/lib/fonts"
import Dropdown from "../dropDown/dropDown"

export default function Header(){

    return (
        <nav className="w-100 flex flex-row justify-between">
            <h1 className={`${poppins700.className} text-dodoWhite-100 text-3xl  tracking-widest`}>BUGA EN ESCENA</h1>
            <Dropdown/>
        </nav>
    )
}