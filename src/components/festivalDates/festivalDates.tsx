'use client'

import {
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
import { useState } from 'react'

export default function FestivalDates({ dates, events }: IFestivalDates) {
    const [showDate, setShowDate] = useState(null)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const morningDatesResult = morningDates(events)
    const eveningDatesResult = eveningDates(events)
    const nightDatesResult = nightDates(events)

    const formattedDates = dates.map(date => {
        const parsedDate = new Date(date)
        return {
            day: parsedDate.getUTCDate().toString(),
            month: MONTHS[+(parsedDate.getUTCMonth() + 1).toString()]
        }
    })

    const formatTime = (event:any) =>{
        const fecha = new Date(event);
        let horaUTC = fecha.getUTCHours();
        const minutesUTC = fecha.getUTCMinutes();
        const am_pm = horaUTC >= 12 ? 'pm' : 'am';
        let hora = horaUTC % 12;
        hora = hora === 0 ? 12 : hora;
        return `${hora}:${minutesUTC.toString().padStart(2, '0')} ${am_pm}`;
    }

    const onShowEventsByDay = (date: any) => {
        setShowDate(date)
        onOpen()
    }

    return (
        <section className="max-w-screen-xl my-14 mx-auto text-dodoWhite-100 grid grid-cols-1 md:grid-cols-2 gap-11 ">
            {formattedDates.map(date => {
                return (
                    <article key={date.day} className="flex justify-center">
                        <h2 className={`${poppins700.className} text-8xl text-[#EF8275]`}>{date.day}</h2>
                        <div className="self-end ">
                            <button onClick={() => onShowEventsByDay(date.day)} className='underline underline-offset-2 text-xs'>HORARIOS</button>
                            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size='xs' isCentered >
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalBody className='bg-dodoBlack-100 text-dodoWhite-100 h-screen'>
                                        <Carousel>
                                            <CarouselContent>
                                                {morningDatesResult.map(morningEvent => {
                                                    
                                                    if (new Date(morningEvent.date).getUTCDate().toString() === showDate && morningEvent.data === 'M-1') {
                                                        return (
                                                            <CarouselItem key={morningEvent.id}>
                                                                <section className="flex flex-col">
                                                                    <h3 className={`${poppins500.className} text-center m-0`}>MAÑANA</h3>
                                                                    <article className="p-2 h-full flex flex-col gap-4" key={morningEvent.id}>
                                                                        <Image src={`static/${morningEvent.picture}`} alt={morningEvent.pictureAlt} width={700} height={700} />
                                                                        <div>
                                                                            <p className={`${poppins700.className} text-base`}>{morningEvent.eventName}</p>
                                                                            <p className="text-sm">{morningEvent.description}</p>
                                                                        </div>
                                                                        <div className="mt-auto">
                                                                            <p className="text-xs font-bold">{`${morningEvent.type === "play" ? 'Grupo:': 'Maestro'}`} <span className="text-sm font-normal">{morningEvent.group}</span></p>
                                                                            <p className="text-xs font-bold">Lugar: <span className="text-sm font-normal">{morningEvent.place}</span></p>
                                                                            <p className="text-xs font-bold">Dirección: <span className="text-sm font-normal">{morningEvent.address}</span></p>
                                                                            <p className="text-xs font-bold">Fecha: <span className="text-sm font-normal">{new Date(morningEvent.date).toLocaleDateString().toString()}</span></p>
                                                                            <p className="text-xs font-bold">Hora: <span className="text-sm font-normal">{formatTime(morningEvent.date)}</span></p>
                                                                        </div>
                                                                    </article>
                                                                </section>
                                                            </CarouselItem>
                                                        )
                                                    }
                                                })}
                                                {morningDatesResult.map(morningEvent => {
                                                    if (new Date(morningEvent.date).getUTCDate().toString() === showDate && morningEvent.data === 'M-2') {
                                                        return (
                                                            <CarouselItem key={morningEvent.id}>
                                                                <section>
                                                                    <h3 className={`${poppins500.className} text-center m-0`}>MAÑANA</h3>
                                                                    <article className="p-2 h-full flex flex-col gap-4" >
                                                                        <div className='w-52 h-72 overflow-hidden my-0  mx-auto'>
                                                                            <Image src={`static/${morningEvent.picture}`} alt={morningEvent.pictureAlt} width={800} height={800} className='w-full h-full object-cover'/>
                                                                        </div>
                                                                        <div>
                                                                            <p className={`${poppins700.className} text-base`}>{morningEvent.eventName}</p>
                                                                            <p className="text-sm">{morningEvent.description}</p>
                                                                        </div>
                                                                        <div className="mt-auto">
                                                                            <p className="text-xs font-bold">{`${morningEvent.type === "play" ? 'Grupo:': 'Maestro'}`} <span className="text-sm font-normal">{morningEvent.group}</span></p>
                                                                            <p className="text-xs font-bold">Lugar: <span className="text-sm font-normal">{morningEvent.place}</span></p>
                                                                            <p className="text-xs font-bold">Dirección: <span className="text-sm font-normal">{morningEvent.address}</span></p>
                                                                            <p className="text-xs font-bold">Fecha: <span className="text-sm font-normal">{new Date(morningEvent.date).toLocaleDateString().toString()}</span></p>
                                                                            <p className="text-xs font-bold">Hora: <span className="text-sm  font-normal">{formatTime(morningEvent.date)}</span></p>
                                                                        </div>
                                                                    </article>
                                                                </section>
                                                            </CarouselItem>
                                                        )
                                                    }
                                                })}
                                                {eveningDatesResult.map(eveningEvent => {
                                                    if (new Date(eveningEvent.date).getUTCDate().toLocaleString() === showDate) {
                                                        return (
                                                            <CarouselItem key={eveningEvent.id}>
                                                                <section className="flex flex-col h-100">
                                                                    <h3 className={`${poppins500.className} text-center`}>TARDE</h3>
                                                                    <article className="p-2 h-full flex flex-col gap-4" key={eveningEvent.id}>
                                                                        <div className='w-52 h-72 overflow-hidden my-0  mx-auto'>
                                                                            <Image src={`static/${eveningEvent.picture}`} alt={eveningEvent.pictureAlt} width={800} height={800} className='w-full h-full object-cover'/>
                                                                        </div>
                                                                        <div>
                                                                            <p className={`${poppins700.className} text-base`}>{eveningEvent.eventName}</p>
                                                                            <p className="text-sm">{eveningEvent.description}</p>
                                                                        </div>
                                                                        <div className=" mt-auto">
                                                                            <p className="text-xs font-bold">{`${eveningEvent.type === "play" ? 'Grupo:': 'Maestro'}`} <span className="text-sm font-normal">{eveningEvent.group}</span></p>
                                                                            <p className="text-xs font-bold">Lugar: <span className="text-sm font-normal">{eveningEvent.place}</span></p>
                                                                            <p className="text-xs font-bold">Dirección: <span className="text-sm font-normal">{eveningEvent.address}</span></p>
                                                                            <p className="text-xs font-bold">Fecha: <span className="text-sm font-normal">{new Date(eveningEvent.date).toLocaleDateString().toString()}</span></p>
                                                                            <p className="text-xs font-bold">Hora: <span className="text-sm font-normal">{formatTime(eveningEvent.date)}</span></p>
                                                                        </div>
                                                                    </article>
                                                                </section>
                                                            </CarouselItem>
                                                        )
                                                    }
                                                })
                                                }
                                                {nightDatesResult.map(nightEvent => {
                                                    if (new Date(nightEvent.date).getUTCDate().toLocaleString() === showDate) {
                                                        return (
                                                            <CarouselItem key={nightEvent.id}>
                                                                <section className="flex flex-col h-100">
                                                                    <h3 className={`${poppins500.className} text-center`}>NOCHE</h3>
                                                                    <article className="p-2 h-full flex flex-col gap-4" key={nightEvent.id}>
                                                                        <div className='w-52 h-72 overflow-hidden my-0  mx-auto'>
                                                                            <Image src={`static/${nightEvent.picture}`} alt={nightEvent.pictureAlt} width={700} height={700} className='w-full h-full object-cover'/>
                                                                        </div>
                                                                        <div>
                                                                            <p className={`${poppins700.className} text-base`}>{nightEvent.eventName}</p>
                                                                            <p className="text-sm">{nightEvent.description}</p>
                                                                        </div>
                                                                        <div className="mt-auto">
                                                                            <p className="text-xs font-bold">{`${nightEvent.type === "play" ? 'Grupo:': 'Maestro'}`} <span className="text-sm font-normal">{nightEvent.group}</span></p>        
                                                                            <p className="text-xs font-bold">Lugar: <span className="text-sm font-normal">{nightEvent.place}</span></p>
                                                                            <p className="text-xs font-bold">Dirección: <span className="text-sm font-normal">{nightEvent.address}</span></p>
                                                                            <p className="text-xs font-bold">Fecha: <span className="text-sm font-normal">{new Date(nightEvent.date).toLocaleDateString().toString()}</span></p>
                                                                            <p className="text-xs font-bold">Hora: <span className="text-sm font-normal ">{formatTime(nightEvent.date)}</span></p>
                                                                        </div>
                                                                    </article>
                                                                </section>
                                                            </CarouselItem>
                                                        )
                                                    }
                                                })
                                                }
                                            </CarouselContent>
                                            <div className='flex justify-center gap-4'>
                                                <CarouselPrevious className='static mt-6' />
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