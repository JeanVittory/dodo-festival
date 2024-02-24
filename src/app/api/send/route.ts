import { EmailTemplate } from "@/components/emailTemplate/emailTemplate";
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export const dynamic = 'force-static';

export async function POST(req:Request){
    try {
        const body = await req.json()
        const {email, subject, message} = body
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['festival.dodo.tech@gmail.com'],
            subject,
            react: EmailTemplate({ message, email }),
            text: ""
        });
        console.log(data)
        return new Response(JSON.stringify(data), {
            headers: { 'Content-type': 'application/json' },
            status: 201,
        })
    } catch (error) {
        console.log(error)
        return Response.json({ error });
    }
}