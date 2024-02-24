import { Box, Button, IconButton, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Tooltip, background } from '@chakra-ui/react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import Image from 'next/image';
import { poppins700, nunito700 } from '@/lib/fonts';

interface IMember{
    name: string;
    lastname: string;
    bio: string;
    image: string;
    role: string;
}

export default function Member({ name, lastname, bio, image, role}:IMember ){
    return (
        <Box>
            <Image src={`static/${image}`} alt={name} width={300} height={300} className='rounded-full w-64 h-64 object-cover shadow-2xl'/>
            <h3 className={`${nunito700.className} text-dodoWhite-100 text-center text-sm mt-4`}>{name} {lastname}</h3>
            <p className={`${poppins700.className} text-dodoWhite-100 text-center text-base flex justify-center items-center`}>
                {role}
                    <Popover placement='bottom'>
                        <PopoverTrigger>
                            <IconButton aria-label= '' size='md' icon={ <IoIosInformationCircleOutline/>}  colorScheme='none'/>
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent>
                                <PopoverBody>
                                    {bio}
                                </PopoverBody>
                            </PopoverContent>
                        </Portal>
                    </Popover>
           
            </p>
        </Box>
    )
}