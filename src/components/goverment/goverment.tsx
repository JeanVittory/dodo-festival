import Image from 'next/image'

export default function Goverment (){
    return (
        <section className='flex gap-7'>
            <Image className='w-16 rounded-full' 
                src="static/alcaldia.jpg"
                alt="Logo alcaldia"
                width={675}
                height={599}
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