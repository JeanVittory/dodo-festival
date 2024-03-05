'use client'
import "react-toastify/dist/ReactToastify.css";
import { nunito400,  poppins700 } from "@/lib/fonts";
import { Tooltip } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { Bounce, toast, ToastContainer } from 'react-toastify';

export default function ContactForm(){
    const [form, setForm] = useState({
        email: "",
        subject: "",
        message: "",
    })
    const [error, setError] = useState({
        email: false,
        subject: false,
        message: false,
    })

    const notifySuccess = () => toast.success('🚀 Tu mensaje ha sido enviado.', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });

    const notifyError = () => toast.error('👎 Algo salio mal. Intentalo de nuevo.', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });;

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { status, body } = await fetch('/api/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(form)
        })
        console.log(status)
        if(status === 201){
            setForm({
                email: "",
                subject: "",
                message: "",
            })
            notifySuccess()
        }
        if(status >= 400){
            notifyError()
        }
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setForm((prevState) => ({...prevState, [name]: value}))
    }

    const handleValidation = (e:any) => {
        const { name, value } = e.target
        let isError = false;
        if (name === 'email') isError = !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        if(name === 'subject') isError = !value;
        if(name === 'message') isError = !/^[\s\S]{4,100}$/.test(value);
        setError((prevError) => ({
            ...prevError,
            [name]: isError,
        }));
    }

    return (
        <main className="p-4 max-w-screen-xl mt-4 mx-auto flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-2">
            <div className="flex flex-col justify-center">   
                <h2 className={`${poppins700.className} text-dodoOrange-100  text-3xl  tracking-widest`}>CONTACTANOS</h2>
                <p className={`${nunito400.className} text-dodoWhite-100  text-sm  py-2 md:w-4/5 tracking-wider`}>Nuestro equipo está ansioso por cada propuesta que llega a nuestras manos. 💌 Así que, ¡adelante! Llenen el formulario con la misma emoción que se siente en el aire antes de que se levante el telón. Estamos aquí para hacer que tus proyectos brillen en el escenario de la vida. 🎬</p>
            </div>
            <form className="flex flex-col gap-y-6 mt-4" onSubmit={sendEmail}>
                <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className={`${nunito400.className} text-dodoWhite-100  text-sm`}>Email:</label>
                        <Tooltip label='Debes ingresar un correo electrónico valido' placement='bottom-start' isOpen={error.email} fontSize="12" backgroundColor='#ED4337'>
                            <input id="email" type="email" name="email" placeholder="youremail@email.com" value={form.email} className={`${error.email ? 'error-border': ''} p-2 rounded-[5px] outline-none`} onChange={handleChange} onBlur={handleValidation} required/>
                        </Tooltip>
                    </div>
                </div>
                <div className="flex flex-col gap-1 mt-2">
                    <label htmlFor="subject" className={`${nunito400.className} text-dodoWhite-100  text-sm`}>Asunto:</label>
                    <Tooltip label='Debes ingresar un asunto' placement='bottom-start' isOpen={error.subject} fontSize="12" backgroundColor='#ED4337'>
                        <input id="subject" type="text" name="subject" placeholder="¿Sobre qué vamos hablar?" value={form.subject} className={`${error.subject ? 'error-border': ''} p-2 rounded-[5px] outline-none`} onChange={handleChange} onBlur={handleValidation} required/>    
                    </Tooltip>
                </div>
                <div className="flex flex-col gap-1 mt-2">
                    <label htmlFor="message" className={`${nunito400.className} text-dodoWhite-100  text-sm`}>Mensaje:</label>
                    <Tooltip label='Debes ingresar tu mensaje' placement='bottom-start' isOpen={error.message} fontSize="12" backgroundColor='#ED4337'>
                        <textarea id="message" name="message"  className={`${error.message ? 'error-border': ''} p-2 rounded-[5px] outline-none resize-none`} placeholder="Tu mensaje" value={form.message} onChange={handleChange} onBlur={handleValidation} required></textarea>
                    </Tooltip>
                </div>
                <button type="submit" className={`${nunito400.className} text-dodoBlack-100  text-sm bg-dodoWhite-200 w-16 py-1 rounded-[5px] self-end mt-2`}>Enviar</button>
            </form>
            <ToastContainer />
        </main>
    )
}