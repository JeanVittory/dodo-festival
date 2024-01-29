import {
    Accordion as AccordionChakra,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'
import Image from 'next/image'
import { poppins400, poppins700 } from "@/lib/fonts"

interface IAccordion {
    image?: string | null
}

export default function Accordion ({ image }:IAccordion) {
    return (
        <div className={`max-w-screen-xl my-14 mx-auto ${image ? 'flex flex-col items-center md:flex-row': ''}`} >
            {image && <Image src={`/static/${image}`} alt='image accordion' width={800} height={600} className='max-w-full md:max-w-md lg:max-w-lg'/>}
            <AccordionChakra allowToggle className="text-dodoWhite-100 w-full p-4">
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{ color: 'white'  }}>
                        <Box className={`${poppins700.className} text-dodoWhite-100 text-base py-2`} as="span" flex='1' textAlign='center'>
                            ¿En que lugares se realizaran las funciones?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel className= {`${poppins400.className} text-sm my-1 leading-5`} pb={4} textAlign='center'>
                    El festival de teatro cuenta con el valioso apoyo de la Alcaldía Municipal de Buga y otras entidades patrocinadoras, tendremos diferentes espacios para las obras, uno de ellos es la joya arquitectónica del Teatro Municipal de Buga.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{ color: 'white'  }}>
                        <Box  className={`${poppins700.className} text-dodoWhite-100 text-base py-2`} as="span" flex='1' textAlign='center'>
                            ¿Dónde puedo conseguir boletas?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel className= {`${poppins400.className} text-sm my-1 leading-5`} pb={4} textAlign='center'>
                        ¡Grandes noticias! Este año, también todas las actividades del festival son gratuitas, sin embargo, las funciones en el Teatro Municipal de Buga necesitarás boletos que podrás obtener a través de nuestros patrocinadores y en la taquilla del teatro. Contáctanos por WhatsApp o redes sociales para más detalles y asegura tu entrada. Recomendamos llegar temprano para las obras de la tarde y vivir una experiencia teatral inolvidable. ¡Y recuerda, todo es gratuito!
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{ color: 'white'  }}>
                        <Box  className={`${poppins700.className} text-dodoWhite-100 text-base py-2`} as="span" flex='1' textAlign='center'>
                            ¿Cómo puedo asistir a los talleres?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel className= {`${poppins400.className} text-sm my-1 leading-5`} pb={4} textAlign='center'>
                        ¡Queremos que todos se sumen a esta experiencia única! Sin embargo, ten en cuenta que nuestros talleres tienen cupo limitado. 
                        ¡Asegura tu participación registrándote en el enlace que compartiremos en nuestras redes sociales o escríbenos para obtener más detalles! 
                        No pierdas la oportunidad de ser parte de estos emocionantes talleres.
                    </AccordionPanel>
                </AccordionItem>
            </AccordionChakra>
        </div>
    )
}