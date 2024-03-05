import Image from "next/image"

export default function Sponsors(){
    return(
        <div className="bg-dodoWhite-200">
            <article className="flex flex-col  items-center  w-full flex-wrap max-w-screen-xl my-0 mx-auto py-8 gap-y-8">
                <section className="w-full flex flex-col items-center md:flex-row md:justify-around gap-20">
                    <Image src='static/secretaria.png' alt="logo bbva" width={240} height={302}  className="w-80 h-36" loading='lazy'></Image>
                    <Image src='static/alcaldia.png' alt="logo cocacola" width={240} height={902} className="w-52" loading='lazy'></Image>
                    <Image src='static/comfandi.png' alt="logo kellogs" width={240} height={902} className="w-80 h-32" loading='lazy'></Image>
                </section>
                <section className="w-full flex flex-col items-center md:flex-row  md:flex-wrap md:justify-around gap-20">
                    <Image src='static/turguide.png' alt="logo ps5" width={240} height={902} className="w-48" loading='lazy'></Image>
                    <Image src='static/teatro.png' alt="logo sprite" width={240} height={902} className="w-44 h-40" loading='lazy'></Image>
                    <Image src='static/camara.png' alt="logo sprite" width={240} height={902} className="w-48" loading='lazy'></Image>
                    <Image src='static/univalle.png' alt="logo sprite" width={240} height={902} className="w-36" loading='lazy'></Image>
                    <Image src='static/loschicos.png' alt="logo ps5" width={240} height={902} className="w-48 h-40" loading='lazy'></Image>
                    <Image src='static/imagine.png' alt="logo sprite" width={240} height={902} className="w-36 h-36" loading='lazy'></Image>
                    <Image src='static/herejia.png' alt="logo sprite" width={240} height={902} className="w-36 h-36" loading='lazy'></Image>
                    <Image src='static/madretierra.png' alt="logo sprite" width={240} height={902} className="w-36" loading='lazy'></Image>
                    <Image src='static/TICH.png' alt="logo sprite" width={240} height={902} className="w-32 h-36" loading='lazy'></Image>
                    <Image src='static/convitelarte.png' alt="logo sprite" width={240} height={902} className="w-60 h-40" loading='lazy'></Image>
                    <Image src='static/adosmanos.png' alt="logo sprite" width={240} height={902} className="w-36" loading='lazy'></Image>
                    <Image src='static/bufones.png' alt="logo sprite" width={240} height={902} className="w-36" loading='lazy'></Image>
                    <Image src='static/lamascara.png' alt="logo sprite" width={240} height={902} className="w-36" loading='lazy'></Image>
                    <Image src='static/coffeeco.png' alt="logo sprite" width={240} height={902} className="w-36" loading='lazy'></Image>
                </section>
            </article>
        </div>
    )
}