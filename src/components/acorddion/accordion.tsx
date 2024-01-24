import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

import { poppins500, poppins700 } from "@/lib/fonts"

export default function Accordion_ (){
    return (
        
        <Accordion allowToggle className="items-center text-dodoWhite-100">
            <AccordionItem>
                <h2>
                <AccordionButton _expanded={{ bg: 'rgba(243, 146, 55, 1)', color: 'white'  }}>
                    <Box className={`${poppins700.className} font-bold text-dodoWhite-100 text-xl`} as="span" flex='1' textAlign='center'>
                    Section 1 title
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel className= {`${poppins500.className} text-lg my-1`} pb={4} textAlign='center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton _expanded={{ bg: 'rgba(243, 146, 55, 1)', color: 'white'  }}>
                    <Box  className={`${poppins700.className} font-bold text-dodoWhite-100 text-xl`} as="span" flex='1' textAlign='center'>
                    Section 2 title
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel className= {`${poppins500.className} text-lg my-1`} pb={4} textAlign='center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}