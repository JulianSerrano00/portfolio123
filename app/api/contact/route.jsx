import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api


export async function POST(request) {

    console.log("reques", request)
    const username = "jufer_tar_lch@hotmail.com" //correo del que envia
    const password = "JUANf3rnando31"//pass del correo que envia
    
    
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const myEmail  = formData.get('email')

    // create transporter object
    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },

        auth: {

            user: username,
            pass: password
        }
    });

    try {

        const mail = await transporter.sendMail({
            from: username,
            to: myEmail,
            replyTo: email,//con copia
            subject: `Website activity from ${email}`,//asunto
            html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
        })
        console.log("reques", mail)

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }
}