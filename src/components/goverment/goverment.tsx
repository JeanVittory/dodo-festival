import Image from 'next/image'

export default function Goverment (){
    return (
        <section className='flex gap-7'>
            <Image
                src="static/alcaldia.png"
                alt="Logo alcaldia"
                width={117}
                height={52}
            />
            <Image
                src="static/cultura.png"
                alt="Logo secretaria"
                width={117}
                height={52}
            />
        </section>    
    )
}
//117
//52