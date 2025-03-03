import Image from "next/image"
import { nunito700 } from "@/lib/fonts";

export default function Sponsors(){
    return(
        <div className="bg-dodoWhite-200 ">
            <article className="flex flex-col  items-center  w-full flex-wrap max-w-screen-xl my-0 mx-auto py-8 gap-y-8 px-4">
                <section className="w-full max-w-screen-xl my-0 mx-auto py-8 gap-y-8">
                    <div className="w-full flex justify-center mb-8 ">
                        <h2 className={`${nunito700.className} text-3xl bg-dodoWhite-200 text-dodoRed-100 py-2 px-5  rounded-2xl  tracking-widest`}>
                            APOYAN
                        </h2>
                    </div>
                    <div className= "w-full flex flex-col items-center md:flex-row md:flex-wrap md:justify-around gap-8">
                        <Image src='static/apoyan/logocultura.png' alt="logo mincultura" width={240} height={902} className="w-48" loading='lazy'></Image>
                        <Image src='static/apoyan/secretaria.png' alt="logo secretaria" width={240} height={302}   loading='lazy'></Image>
                        <Image src='static/apoyan/alcaldia.png' alt="logo alcaldia" width={240} height={902} className="w-48" loading='lazy'></Image>
                        <Image src='static/apoyan/comfandi.png' alt="logo comfandi" width={240} height={902}  loading='lazy'></Image>
                        
                    </div>
                </section>
                <section className="w-full flex flex-col">
                    <div className="w-full flex justify-center mb-8">
                        <h2 className={`${nunito700.className} text-3xl bg-dodoWhite-200 text-dodoRed-100 py-2 px-5  rounded-2xl  tracking-widest`}>
                            ALIADOS
                        </h2>
                    </div>
                        <div className="-full flex flex-col items-center md:flex-row md:flex-wrap md:justify-around  gap-16">
                        <Image src='static/aliados/turguide.png' alt="logo Turguide" width={240} height={902} className="w-48" loading='lazy'></Image>
                        <Image src='static/aliados/amaretto.png' alt="logo amaretto" width={240} height={902} className="w-40" loading='lazy'></Image>
                        <Image src='static/aliados/autoclub.png' alt="logo autoclub" width={240} height={902} className="w-40" loading='lazy'></Image>
                        <Image src='static/aliados/bocados.png' alt="logo amaretto" width={240} height={902}  className="h-40 w-44" loading='lazy'></Image>
                        <Image src='static/aliados/hotellaterraza.png' alt="logo hotel la terraza" width={240} height={902} className="w-40" loading='lazy'></Image>
                        <Image src='static/aliados/litobuga.png' alt="logo litobuga" width={240} height={902} className="w-40" loading='lazy'></Image>
                        <Image src='static/aliados/coffeeco.png' alt="logo coffeeco" width={240} height={902} loading='lazy'></Image>
                        <Image src='static/aliados/nomad.png' alt="logo nomad" width={240} height={902} className="h-40 w-44" loading='lazy'></Image>
                        <Image src='static/aliados/oscargarcia.png' alt="logo oscar garcia" width={240} height={902} className="w-40" loading='lazy'></Image>
                        <Image src='static/aliados/pachamama.png' alt="logo la pachamama" width={240} height={902} className="w-40" loading='lazy'></Image>
                        <Image src='static/aliados/piantato.png' alt="logo piantato" width={240} height={902} className="w-40" loading='lazy'></Image>
                        <Image src='static/aliados/solemne.png' alt="logo solemne" width={240} height={902}className="w-40"  loading='lazy'></Image>
                        <Image src='static/aliados/sumerce.png' alt="logo glamping sumerce" width={240} height={902} className="w-40" loading='lazy'></Image>
                        <Image src='static/aliados/teatrom.png' alt="logo teatro municipal" width={240} height={902} className="w-40" loading='lazy'></Image>
                        <Image src='static/aliados/tofinos.png' alt="logo tofiños gym" width={240} height={902} className="w-40" loading='lazy'></Image>
                        <Image src='static/aliados/univalle.png' alt="logo univalle sede buga" width={240} height={902}  className="w-40" loading='lazy'></Image>
                        <Image src='static/aliados/vatiexpress.png' alt="logo vatiexpress" width={240} height={902} className="w-40" loading='lazy'></Image>

                        
                        </div>
                </section>
            </article>
        </div>
    )
}