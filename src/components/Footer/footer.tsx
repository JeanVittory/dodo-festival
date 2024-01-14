import Socials from "../socials/socials"
import Label from "../label/label"
import Goverment from "../goverment/goverment"

export default function Footer() {
   return (
    <footer className="flex justify-around my-6">
        <Socials/>
        <Label/>
        <Goverment/>
    </footer>
   )
   
}