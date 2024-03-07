import Marquee from "react-fast-marquee"

export default function MarqueeComponent(){

    return (
        <a href="/programacion.pdf" download='programacion'>
            <div className="w-full  flex flex-col  items-center  text-dodoWhite-100  overflow-hidden cursor-pointer">
                <div className={`w-[100%]  flex  flex-col h-10 `}>
                    <Marquee autoFill  className="bg-dodoRed-100 overflow-y-hidden" >
                        <div className="m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl">
                            Programación del Festival 2024
                        </div>
                    </Marquee>
                </div>
            </div>
        </a>
    )
}