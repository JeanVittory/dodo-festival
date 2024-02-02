import { poppins500 } from "@/lib/fonts"
import TEAM from "@/database/TEAM.json"
import Member from "@/components/member/member"

export default function Team(){
    return (
        <main className="p-4 max-w-screen-xl mt-4 mx-auto">
            <h2 className={`${poppins500.className} text-dodoWhite-100  text-3xl  tracking-widest`}>EQUIPO</h2>
            <article className='flex flex-col gap-y-14 items-center md:flex-row md:justify-evenly mt-14 md:flex-wrap md:gap-y-14 md:gap-x-8'>
                { TEAM.map(member => {
                    return (
                        <Member key={member.id} {...member}/>
                    )
                }) }
            </article>
        </main>
    )
}