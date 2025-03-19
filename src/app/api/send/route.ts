import { EmailTemplate } from "@/components/emailTemplate/emailTemplate";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export const dynamic = 'force-static';

export async function POST(req:Request){
    try {
        const body = await req.json()
        const {email, subject, message} = body
        const data = await resend.emails.send({
            from: 'Acme <noreply@bugaenescena.com>',
            to: ['bugaenescena@gmail.com'],
            subject,
            react: EmailTemplate({ message, email }),
            text: ""
        });
        return new Response(JSON.stringify(data), {
            headers: { 'Content-type': 'application/json' },
            status: 201,
        })
    } catch (error) {
        return Response.json({ error });
    }
}