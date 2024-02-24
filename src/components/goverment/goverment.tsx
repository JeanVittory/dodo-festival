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
            <Image className=''
                src="static/bugalogocumpleaños_version2.png"
                alt="Logo secretaria"
                width={100}
                height={100}
            />
        </section>    
    )
}