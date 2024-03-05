import Image from 'next/image'

export default function Goverment (){
    return (
        <section className='flex gap-7'>
            <Image
                src="static/alcaldia.png"
                alt="Logo alcaldia"
                width={88.5}
                height={56}
                loading='lazy'
            />
            <Image className=''
                src="static/secretaria-white.png"
                alt="Logo secretaria"
                width={160}
                height={80}
                loading='lazy'
            />
        </section>    
    )
}