import Image from 'next/image'

export default function Goverment (){
    return (
        <section className='flex gap-7'>
            <Image className='w-16 rounded-full' 
                src="/alcaldia.jpg"
                alt="Logo alcaldia"
                width={675}
                height={599}
            />
            <Image className='w-16 rounded-full'
                src="/secretaria.jpg"
                alt="Logo secretaria"
                width={1000}
                height={1000}
            />
        </section>    
    )
}