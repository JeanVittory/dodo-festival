import { poppins700 } from "@/lib/fonts"
import Dropdown from "../dropDown/dropDown"
import Link from "next/link";

export default function Header(){

    return (
        <nav className="w-100 flex flex-row justify-between p-4">
            <h1 className={`${poppins700.className} text-dodoWhite-100 text-3xl  tracking-widest`}>
                <Link href="/">
                    BUGA EN ESCENA
                </Link> 
            </h1>
            <Dropdown/>
        </nav>
    )
}