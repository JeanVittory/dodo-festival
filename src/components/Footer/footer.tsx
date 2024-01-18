import Socials from "../socials/socials"
import Label from "../label/label"
import Goverment from "../goverment/goverment"

export default function Footer() {
   return (
    <footer className="flex flex-col items-center gap-y-4 sm:flex-row justify-around max-w-screen-xl my-6 mx-auto">
        <Socials/>
        <Label/>
        <Goverment/>
    </footer>
   )
   
}