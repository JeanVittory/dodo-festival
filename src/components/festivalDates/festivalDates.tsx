'use client'

import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,
} from '@chakra-ui/react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { poppins500, poppins700 } from "@/lib/fonts"
import { MONTHS } from "@/lib/constants"
import { IFestivalDates } from "@/interfaces/festivalDates"
import { morningDates, eveningDates, nightDates } from "@/lib/detectTime"

export default function FestivalDates({ dates, events }: IFestivalDates){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const formattedDates = dates.map(date =>{
        const parsedDate = new Date(date)
        return {
            day: parsedDate.getUTCDate().toString(),
            month: MONTHS[+(parsedDate.getUTCMonth() + 1).toString()]
        }
    })

    const morningDatesResult = morningDates(events)
    const eveningDatesResult = eveningDates(events)
    const nightDatesResult = nightDates(events)

    return (
        <section className="max-w-screen-xl my-14 mx-auto text-dodoWhite-100 grid grid-cols-1 md:grid-cols-2 gap-11 ">
            {formattedDates.map(date => {
                return (
                    <article key={date.day} className="flex justify-center"> 
                        <h2 className={`${poppins700.className} text-8xl text-[#EF8275]`}>{date.day}</h2>
                        <div className="self-end ">
                            <button onClick={onOpen} className='underline underline-offset-2 text-xs'>HORARIOS</button>
                            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size='xs' isCentered >
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalBody className='bg-dodoBlack-100 text-dodoWhite-100 h-screen'>
                                        <Carousel>
                                            <CarouselContent>
                                                <CarouselItem>
                                                    <section className="flex flex-col">
                                                        <h3 className={`${poppins500.className} text-center m-0`}>MAÑANA</h3>
                                                        {!morningDatesResult ? (
                                                            <div>No hay eventos</div>

                                                        ) : (
                                                            morningDatesResult.map(morningEvent =>{
                                                                if(new Date(morningEvent.date).getUTCDate().toString() === date.day){
                                                                    return (
                                                                        <article className="p-2 h-full flex flex-col gap-4" key={morningEvent.date}>
                                                                            <Image src={`static/${morningEvent.picture}`} alt={morningEvent.pictureAlt} width={800} height={800}/>
                                                                            <div>
                                                                                <p className={`${poppins700.className} text-base`}>{morningEvent.eventName}</p>
                                                                                <p className="text-sm">{morningEvent.description}</p>
                                                                            </div>
                                                                            <div className="mt-auto">
                                                                                <p className="text-xs">Precio: <span className="text-sm">${morningEvent.price}</span></p>
                                                                                <p className="text-xs">Lugar: <span className="text-sm">{morningEvent.place}</span></p>
                                                                                <p className="text-xs">Fecha: <span className="text-sm">{new Date(morningEvent.date).toLocaleDateString().toString()}</span></p>
                                                                            </div>
                                                                        </article>
                                                                    )
                                                                }
                                                            })
                                                        )}
                                                    </section>
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <section className="flex flex-col h-100">
                                                        <h3 className={`${poppins500.className} text-center`}>TARDE</h3>
                                                        {!eveningDatesResult ? (
                                                            <div>No hay eventos</div>
                                                            ) : (
                                                                eveningDatesResult.map(eveningEvent =>{
                                                                    if(new Date(eveningEvent.date).getUTCDate().toLocaleString() === date.day){
                                                                        return (
                                                                            <article className="p-2 h-full flex flex-col gap-4" key={eveningEvent.date}>
                                                                            <Image src={`static/${eveningEvent.picture}`} alt={eveningEvent.pictureAlt} width={800} height={800}/>
                                                                            <div>
                                                                                <p className={`${poppins700.className} text-base`}>{eveningEvent.eventName}</p>
                                                                                <p className="text-sm">{eveningEvent.description}</p>
                                                                            </div>
                                                                            <div className=" mt-auto">
                                                                                <p className="text-xs">Precio: <span className="text-sm">${eveningEvent.price}</span></p>
                                                                                <p className="text-xs">Lugar: <span className="text-sm">{eveningEvent.place}</span></p>
                                                                                <p className="text-xs">Fecha: <span className="text-sm">{new Date(eveningEvent.date).toLocaleDateString().toString()}</span></p>
                                                                            </div>
                                                                        </article>
                                                                    )
                                                                }
                                                            })
                                                            )  }
                                                    </section>
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <section className="flex flex-col h-100">
                                                        <h3 className={`${poppins500.className} text-center`}>NOCHE</h3>
                                                            {!nightDatesResult ? (
                                                                <div>No hay eventos</div>
                                                                ) : (
                                                                    nightDatesResult.map(nightEvent => {
                                                                        if(new Date(nightEvent.date).getUTCDate().toLocaleString() === date.day){
                                                                            return (
                                                                                <article className="p-2 h-full flex flex-col gap-4" key={nightEvent.date}>
                                                                                <Image src={`static/${nightEvent.picture}`} alt={nightEvent.pictureAlt} width={800} height={800}/>
                                                                                <div>
                                                                                    <p className={`${poppins700.className} text-base`}>{nightEvent.eventName}</p>
                                                                                    <p className="text-sm">{nightEvent.description}</p>
                                                                                </div>
                                                                                <div className="mt-auto">
                                                                                    <p className="text-xs">Precio: <span className="text-sm">${nightEvent.price}</span></p>
                                                                                    <p className="text-xs">Lugar: <span className="text-sm">{nightEvent.place}</span></p>
                                                                                    <p className="text-xs">Fecha: <span className="text-sm">{new Date(nightEvent.date).toLocaleDateString().toString()}</span></p>
                                                                                </div>
                                                                            </article>
                                                                        )
                                                                    }
                                                                })
                                                                )  }
                                                    </section>
                                                </CarouselItem>
                                            </CarouselContent> 
                                            <div className='flex justify-center gap-4'>
                                                <CarouselPrevious className='static mt-6'/>
                                                <CarouselNext className='static mt-6' />
                                            </div>
                                        </Carousel>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
                            <h3 className={`${poppins500.className} self-end mb-2 text-2xl`} >{date.month}</h3>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}