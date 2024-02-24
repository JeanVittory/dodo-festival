import { poppins700, poppins400 } from "@/lib/fonts"
import TEAM from "@/database/TEAM.json"
import Member from "@/components/member/member"

export default function Team(){
    return (
        <main className="p-4 max-w-screen-xl mt-4 mx-auto">
            <div className="flex flex-col gap-4">
                <h2 className={`${poppins700.className} text-dodoWhite-100  text-2xl  tracking-widest`}>EQUIPO</h2>
                <p className={`${poppins400.className} text-dodoWhite-100  text-sm  tracking-widest`}>¡Descubre las caras detrás de las historias! ✨🎭</p>
            </div>
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